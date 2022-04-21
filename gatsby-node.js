require('dotenv').config()
const fetch = require('node-fetch');
const { createRemoteFileNode } = require("gatsby-source-filesystem");
const slugify = require('slugify');
const typeDefs = require('./src/graphql/typeDefs');

 // Define Markdown YAML Schema Types

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

    let listings = [];

    await Promise.all(listingEndpoints.map(async (endpoint) => {
        const data = await fetchData(endpoint)
        const photosEndpoint = data.photos.links.filter(link => link.rel === 'self').map(e => e.href).toString()
        const photoArray = await fetchData(photosEndpoint)
        const photoData = await Promise.all(photoArray.results.map(async (result) => {
            const photoEndpoint = result.links.filter(link => link.rel === 'self').map(e => e.href).toString()
            const data = await fetchData(photoEndpoint)
            const photoObj = { _id: data.id, url: data.largeImageUrl, order: data.displayOrder }
            return photoObj
        }))
        const photos = photoData.map(photo => (photo))
        const slug = slugify(`${data.address.houseNumber}-${data.address.streetName}`, { lower: true })
        const listing = {
            _id: data.id,
            slug: slug,
            dateImported: data.dateImported,
            boardId: data.boardId,
            listingNumber: data.listingNumber,
            listingAgent: data.listingAgent,
            listingOffice: data.listingOffice, 
            listingStatus: data.listingStatusDisplay,
            details: {
                listPrice: data.listPrice,
                status: data.status,
                description: data.description,
                squareFeet: data.squareFeet,
                bedrooms: data.bedrooms,
                fullBathrooms: data.fullBathrooms,
                partialBathrooms: data.partialBathrooms,
            },
            location: {
                address: {
                    houseNumber: data.address.houseNumber,
                    streetName: data.address.streetName,
                    city: data.address.city,
                    state: data.address.state,
                    postalCode: data.address.postalCode,
                },
                geo: {
                    latitude: data.latitude,
                    longitude: data.longitude,
                },
            },
            imageData: photos,
        }
        listings.push(listing)
    }))

    // Create IDX Listing Source Nodes

    if(listings.length > 0) {
        listings.forEach((listing) => {
            createNode({
              ...listing,
              id: listing._id,
              parent: null,
              children: [],
              internal: {
                type: `IDX`,
                content: JSON.stringify(listing),
                contentDigest: createContentDigest(listing)
              }
            })
          })
    }

}

exports.onCreateNode = async ({node, getNode, actions, store, cache, getCache, createContentDigest }) => {

    const { createNode } = actions;

    // Create Remote Image Files for IDX Listing Images

    if(node.internal.type === 'IDX') {
        node.imageData.map(image =>
          createRemoteFileNode({
            url: image.url,
            parentNodeId: node.id,
            store,
            cache,
            getCache,
            createNode,
            createNodeId: id => image._id,
          })
          .catch(err => {
            console.log(`Error fetching remote image -- \n Listing: ${node.location.address.houseNumber}-${node.location.address.streetName} \n Source: ${image.url}`)
          })
        )
      } 

    // Generate Listing Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'listings' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-listing`,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Listing',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Blog Post Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'blog' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-blog`,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Blog',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Legal Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'legal' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-legal`,
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
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-offices`,
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
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-team`,
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
        const markdownNode = await getNode(node.children[0])
        createNode({
            ...markdownNode,
            id: `${node.id}-partners`,
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


