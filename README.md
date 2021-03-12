# pietrorea.com

This repo contains the source code and content for [https://www.pietrorea.com](https://www.pietrorea). The site is currently powered by [Gatsby.js](https://github.com/gatsbyjs/) and hosted on Netlify. The current Gatsby theme is a derivative of the [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) template. Gatsby is great if you want to learn about React and GraphQL.

# Set up

- Prerequisites: make sure `node`, `yarn`, `nvm` are installed. Then install node 10 using nvm.
- Clone [this repo](https://github.com/pietrorea/pietrorea.com) and run `yarn install`. Install peer dependencies.
- Run `yarn dev` to run locally.

# Content

The blog posts and pages are written in Markdown and they're located in the `/src/content` directory.

The posts use Jekyll-inspired [frontmatter](https://jekyllrb.com/docs/frontmatter/) to communicate metadata back to the blogging engine. The frontmatter variables currently supported are listed below:

- **title**: The title of the blog post
- **path**: The relative URL path for the blog post or page (e.g. `/2018/05/31/new-blogging-platform-gatsby-js` or `/now`). To prevent broken links, the blogging engine should not apend a URL prefix such as`blog` in front of this path. For example, `/path-example` should always be served from `https://pietrorea.com/path-example`. 
- **date**: Date of publication (e.g. 2018-05-31)
- **author**: Blog post author
- **layout**: Layout that the blogging engine should use. The only supported layout is `post` at the moment.
- **status**: The status of the blog post. Supported values are `published` and `draft`.
