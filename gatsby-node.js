require('dotenv').config()
const fetch = require('node-fetch');
const { createRemoteFileNode, createFilePath } = require("gatsby-source-filesystem");
const slugify = require('slugify');
const typeDefs = require('./src/graphql/typeDefs');

 // Define Schema Types

 exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    createTypes(typeDefs)
  }

// Create IDX Listing Source Nodes

exports.sourceNodes = async ({ actions, createContentDigest }) => {

    const { createNode } = actions;

    // Set API Auth

    const authCredential = 'Basic ' + new Buffer.from(process.env.IHOMEFINDERUSERNAME + ':' + process.env.IHOMEFINDERPASSWORD).toString('base64')
    const requestOptions = {
    'method': 'GET',
    'headers': {
        'Accept': 'application/json',
        'Authorization': authCredential,
    }
    };

    // Fetch Listings Data

    const listingsEndpoint = process.env.IHOMEFINDERENDPOINT

    const fetchListings = async () => {
        const listingsResponse = await fetch(listingsEndpoint, requestOptions)
        const listings = await listingsResponse.json();
        const listingsData = Object.values(listings.results);
        return listingsData
    }

    const listingEndpoints = await fetchListings().then((result) => {
        let listingEndpoints = [];
        result.forEach((link) => {
            listingEndpoints.push(link.links.filter(link => link.rel === 'self').map(e => e.href).toString())
        })
        return listingEndpoints;
    })

    const fetchData = async (endpoint) => {
        const response = await fetch(endpoint, requestOptions)
        const data = await response.json()
        return data;
    }

    const formatPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    let listings = [];
  
    await Promise.all(listingEndpoints.map(async (endpoint) => {
        const data = await fetchData(endpoint)
        const photosEndpoint = data.photos.links.filter(link => link.rel === 'self').map(e => e.href).toString()
        const photoArray = await fetchData(photosEndpoint)
        const photoData = await Promise.all(photoArray.results.map(async (result) => {
            const photoEndpoint = result.links.filter(link => link.rel === 'self').map(e => e.href).toString()
            const data = await fetchData(photoEndpoint)
            const photoObj = { _id: data.id, image: data.largeImageUrl, order: data.displayOrder }
            return photoObj
        }))
        const photos = photoData.map(photo => (photo))
        const slug = slugify(`${data.address.houseNumber}-${data.address.streetName}`, { lower: true })
        const status = data.status.charAt(0).toUpperCase() + data.status.slice(1)
        const price = formatPrice.format(data.listPrice)
        const listing = {
            _id: data.id,
            _type: 'IDX',
            title: `${data.address.houseNumber} ${data.address.streetName}`,
            slug: slug,
            cities: data.address.city,
            states: data.address.state,
            zip_codes: data.address.postalCode,
            listing_agent: data.listingAgent,
            status: status,
            price: price,
            details: {
                description: data.description,
                squareFeet: data.squareFeet,
                bedrooms: data.bedrooms,
                fullBathrooms: data.fullBathrooms,
                partialBathrooms: data.partialBathrooms,
                latitude: data.latitude,
                longitude: data.longitude,
            },
            photos: {
                gallery: photos,
            },
        }
        listings.push(listing)
    }))

    // Create IDX Listing Source Nodes

    

    if(listings.length > 0) {

        listings.forEach(async(listing) => {
            await createNode({
              ...listing,
              id: listing._id,
              slug: listing.slug,
              parent: null,
              children: [],
              internal: {
                type: `Idx`,
                content: JSON.stringify(listing),
                contentDigest: createContentDigest(listing)
              }
            })
        })
    }
}

exports.onCreateNode = async ({node, getNode, createNodeId, actions, store, cache, getCache, createContentDigest }) => {

    const { createNode, createNodeField } = actions;

    if(node.internal.type === 'Idx'){

        if(node.photos.gallery){
            let imageNodes = []
            await Promise.all(node.photos.gallery.map(async (image) => {
                const imageNode = await createRemoteFileNode({
                    url: image.image,
                    parentNodeId: node.id,
                    store,
                    cache,
                    getCache,
                    createNode,
                    createNodeId,
                })
                .catch(err => {
                    console.log(`Error fetching image file from source: ${image.image} for listing: ${node.title}. The image file likely no longer exists at the source URL.`)
                })
                if(imageNode){
                    imageNodes.push(imageNode)
                }
            }))
            if(imageNodes){
              const filterNodes = imageNodes.filter(imageNode => imageNode.id);
              const orderNodes = filterNodes.sort((a, b) => {
                  let dateA = new Date(a.birthtime)
                  let dateB = new Date(b.birthtime)
                return dateA - dateB;
              });
              createNodeField({
                  node,
                  name: 'photos___NODE',
                  value: orderNodes.map(imageNode => imageNode.id),
              })
              createNodeField({
                  node,
                  name: 'featuredImage___NODE',
                  value: orderNodes[0].id,
              })
            }
        }
    }

    // Generate Listing Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'listings' && node.base !== '_index.md'){
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        const markdownNode = await getNode(node.children[0])
        let images = []
        if(markdownNode.frontmatter.photos?.gallery){
            markdownNode.frontmatter.photos.gallery.map((gallery => {
                const imagePath = `../../static${gallery.image}`
                images.push(imagePath)
            }))
        }
        createNode({
            ...markdownNode,
            id: `${node.id}-listing`,
            _type: 'User Listing',
            slug: slug,
            photos: images,
            featuredImage: images[0],
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Listing',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)      
            },
        }) 
        // Create Cities Nodes
        if(markdownNode.frontmatter.cities){
            const slug = slugify(markdownNode.frontmatter.cities, { lower: true })
            createNode({
                id: `city-${slug}`,
                slug: slug,
                city: markdownNode.frontmatter.cities,
                parent: markdownNode.id,
                children: [],
                internal: {
                    type: 'City',
                    content: JSON.stringify(markdownNode.frontmatter.cities),
                    contentDigest: createContentDigest(markdownNode.frontmatter.cities)
                },
            })  
        }
        // Create Zip Code Nodes
        if(markdownNode.frontmatter.zip_codes){
            const slug = slugify(markdownNode.frontmatter.zip_codes, { lower: true })
            createNode({
                id: `zipcode-${slug}`,
                slug: slug,
                zipcode: markdownNode.frontmatter.zip_codes,
                parent: markdownNode.id,
                children: [],
                internal: {
                    type: 'Zipcode',
                    content: JSON.stringify(markdownNode.frontmatter.zip_codes),
                    contentDigest: createContentDigest(markdownNode.frontmatter.zip_codes)
                },
            })  
        }
        // Create Property Nodes
        if(markdownNode.frontmatter.properties){
            const slug = slugify(markdownNode.frontmatter.properties, { lower: true })
            createNode({
                id: `property-${slug}`,
                slug: slug,
                property: markdownNode.frontmatter.properties,
                parent: markdownNode.id,
                children: [],
                internal: {
                    type: 'Property',
                    content: JSON.stringify(markdownNode.frontmatter.properties),
                    contentDigest: createContentDigest(markdownNode.frontmatter.properties)
                },
            })  
        }
    }

    // Generate Blog Post Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'blog' && node.base !== '_index.md'){
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-blog`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Blog',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
        // Generate Category Nodes
        if(markdownNode.frontmatter.categories){
            markdownNode.frontmatter.categories.forEach((category) => {
                const slug = slugify(category, { lower: true })
                createNode({
                    id: `category-${slug}`,
                    slug: slug,
                    category: category,
                    parent: markdownNode.id,
                    children: [],
                    internal: {
                        type: 'Category',
                        content: JSON.stringify(category),
                        contentDigest: createContentDigest(category)
                    },
                })  
            })
        }
        // Generate Tag Nodes
        if(markdownNode.frontmatter.tags){
            markdownNode.frontmatter.tags.forEach((tag) => {
                const slug = slugify(tag, { lower: true })
                createNode({
                    id: `tag-${slug}`,
                    slug: slug,
                    tag: tag,
                    parent: markdownNode.id,
                    children: [],
                    internal: {
                        type: 'Tag',
                        content: JSON.stringify(tag),
                        contentDigest: createContentDigest(tag)
                    },
                })  
            })
        }
    }

    // Generate Legal Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'legal' && node.base !== '_index.md'){
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-legal`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Legal',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Offices Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'offices' && node.base !== '_index.md'){
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-offices`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Office',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Team Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'our-team' && node.base !== '_index.md'){
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-team`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Team',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Partners Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'partners' && node.base !== '_index.md'){
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-partners`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Partner',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }
 
}