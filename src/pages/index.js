import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout-component";

import Bio from "../components/Bio";
const BlogIndex = (props) => {
  const { location } = props;

  const siteTitle = get(props, "data.site.siteMetadata.title");
  const posts = get(props, "data.allWpPost.nodes");

  return (
    <Layout location={location}>
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map((post) => {
          return (
            <div key={post.slug}>
              <h1
                style={{
                  marginBottom: "1.5rem",
                }}
              >
                <Link
                  style={{ boxShadow: "none" }}
                  to={`${post.slugDate}${post.slug}`}
                >
                  {post.title}
                </Link>
              </h1>
              <small>{post.postDate}</small>
              <p
                style={{ marginTop: "2.815rem", marginBottom: "4rem" }}
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        slug
        slugDate: date(formatString: "/YYYY/MM/DD/")
        postDate: date(formatString: "DD MMMM, YYYY")
        excerpt
        title
      }
    }
  }
`;
