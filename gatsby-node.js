const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    resolve(
      graphql(
        `
          {
            allWpPost(sort: { date: DESC }) {
              nodes {
                id
                slug
                date(formatString: "/YYYY/MM/DD/")
                title
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allWpPost.nodes;
        _.each(posts, (post, index) => {
          createPage({
            path: `${post.date}${post.slug}`,
            component: blogPost,
            context: {
              slug: `${post.slug}`
            },
          });
        });
      })
    );
  });
};