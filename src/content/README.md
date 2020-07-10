# Blog

This is the content for my personal blog hosted at [http://www.pietrorea.com](http://www.pietrorea.com). The source code for the site is also [on Github](https://github.com/pietrorea/gatsby-blog) and is currently powered by [Gatsby.js](https://www.gatsbyjs.org/).

# Frontmatter

This blog uses Jekyll-inspired [frontmatter](https://jekyllrb.com/docs/frontmatter/) to communicate metadata back to the blogging engine. The frontmatter variables currently supported are listed below:

- **title**: The title of the blog post
- **path**: The relative URL path for the blog post or page (e.g. `/2018/05/31/new-blogging-platform-gatsby-js` or `/now`). To prevent broken links, the blogging engine should not apend a URL prefix such as`blog` in front of this path. For example, `/path-example` should always be served from `https://pietrorea.com/path-example`. 
- **date**: Date of publication (e.g. 2018-05-31)
- **author**: Blog post author
- **layout**: Layout that the blogging engine should use. The only supported layout is `post` at the moment.
- **status**: The status of the blog post. Supported values are `published` and `draft`.