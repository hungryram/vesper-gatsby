# Vesper-Gatsby Template
---

### Changes

**IDX**
- IDX listings now statically generated in Gatsby using data sourced at build time rather than with iHomefinder embed
- IDX listings programatically created via Gatsby Node API with data sourced from new IDX source nodes

**Images**
- IDX listing images downloaded / cached with remote node files created for use with Gatsby Image API

**Site Data**
- YAML data transformed to nodes and imported into components via graphQL static query

**Pages**
- Page data fetched using graphQL page query from ID passed via page context
- "Single" pages created programatically via Gatsby Node API with markup sourced from template files in 'src/pageTemplates/[parentFolder].single.js'

**Misc**
- Layouts folder is now Components & files only created for partials
- Page links created with Gatsby Link API for prefetching content
- CSS folder moved in /src directory