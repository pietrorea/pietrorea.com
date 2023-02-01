import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout-component";
import ArchiveYear from "../components/ArchiveYear";
import Bio from "../components/Bio";

class ArchivePage extends React.Component {
  render() {
    const { location } = this.props;
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allWpPost.nodes");

    let yearToPosts = {};
    posts.map((post) => {
      let datePublished = post.date;
      let year = new Date(datePublished).getFullYear();
      if (yearToPosts[year]) {
        yearToPosts[year].push(post);
      } else {
        yearToPosts[year] = new Array();
        yearToPosts[year].push(post);
      }
    });

    const years = Object.keys(yearToPosts).sort().reverse();

    return (
      <Layout location={location}>
        <div>
          <Helmet title={siteTitle} />
          {years.map((year) => {
            return (
              <ArchiveYear
                key={year}
                year={year}
                blogPosts={yearToPosts[year]}
              />
            );
          })}
        </div>
        <hr
          style={{
            marginTop: "1.75rem",
            marginBottom: "1.75rem",
          }}
        />
        <Bio />
      </Layout>
    );
  }
}

export default ArchivePage;

export const pageQuery = graphql`
  query ArchiveQuery {
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
          date(formatString: "YYYY-MM-DD")
          title
        }
    }
  }
`;
