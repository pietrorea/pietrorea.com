import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout-component";

import Bio from "../components/Bio";
class BlogIndex extends React.Component {
  render() {
    const { location } = this.props;

    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout location={location}>
        <div>
          <Helmet title={siteTitle} />
          <Bio />
          {posts.map(({ node }) => {
            const title = get(node, "frontmatter.title") || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h1
                  style={{
                    marginBottom: "1.5rem",
                  }}
                >
                  <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h1>
                <small>{node.frontmatter.date}</small>
                <p
                  style={{ marginTop: "2.815rem", marginBottom: "4rem" }}
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { layout: { eq: "post" }, status: { eq: "published" } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
