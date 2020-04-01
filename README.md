# pietrorea.com

This is the source code for [https://pietrorea.com`](https://github.com/gatsbyjs/gatsby-starter-blog). The site is currently powered by [Gatsby.js](https://github.com/gatsbyjs/) and hosted on AWS. The currentGatsby theme is a derivative of the [`gatsby-starter-blog`](https://github.com/gatsbyjs/gatsby-starter-blog) template. Gatsby is great if you want to learn about React and GraphQL.

By the way, only the source code for the site lives here. The actual content lives in a [separate repo](https://github.com/pietrorea/blog). This separation of concerns gives me the freedom to evolve and re-platform the blog over time without having to muck around with the format of the content. If you were wondering, on an infinite timeline, yes I'm planning to write my own blogging engine in Swift. 

## Set up

- Pre-reqs: make sure `node`, `yarn`, `nvm` are installed. Then install node 10 using nvm.
- Clone [https://github.com/pietrorea/pietrorea.com] and run `yarn install`
- Clone [https://github.com/pietrorea/blog] in the same directory as `pietrorea.com`
- Both repos have to at the same level because `pietrorea.com` references `blog` in `gatsby-config`.
- Run `yarn dev` to run locally.