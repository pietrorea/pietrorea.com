import React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";

import Bio from "../components/Bio";
import Layout from "../components/layout-component";
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.wpPost;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <h1>{post.title}</h1>
          <small>{post.date}</small>
          <div
            style={{ marginTop: "2.815rem" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <hr
            style={{
              marginBottom: "1.75rem",
            }}
          />
          <Bio />

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0,
            }}
          ></ul>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wpPost(slug: { eq: $slug }) {
      id
      content
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }
`;
