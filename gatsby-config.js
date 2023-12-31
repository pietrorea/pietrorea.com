require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Pietro Rea",
    author: "Pietro Rea",
    description: "My place on the 'net.",
    siteUrl: "https://pietrorea.com/",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WPGRAPHQL_URL}`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-85442279-5",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWpPost } }) => {
              return allWpPost.nodes.map((node) => {
                return Object.assign(
                  {},
                  {
                    title: node.title,
                    description: node.excerpt,
                    date: node.date,
                    url: `${site.siteMetadata.siteUrl}${node.slugDate}${node.slug}?utm_source=rss&utm_medium=rss`,
                    guid: site.siteMetadata.siteUrl + node.slugDate + node.slug,
                    custom_elements: [{ "content:encoded": node.content }],
                  }
                );
              });
            },
            query: `
              {
                allWpPost(sort: { date: DESC }) {
                  nodes {
                    id
                    title
                    slug
                    slugDate: date(formatString: "/YYYY/MM/DD/")
                    date(formatString: "YYYY-MM-DD")
                    excerpt
                    content                    
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Pietro Rea",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pietro Rea`,
        short_name: `Pietro Rea`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `static/headshot.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://pietrorea.com`,
        stripQueryString: true,
      },
    },
  ],
};
