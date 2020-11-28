import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout-component'
import ArchiveYear from '../components/ArchiveYear'
import Bio from '../components/Bio'

class ArchivePage extends React.Component {
  render() {
    const { location } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    let yearToPosts = {};
    posts.map(( { node }) => {
      let datePublished = node.frontmatter.date;
      let year = new Date(datePublished).getFullYear();
      if (yearToPosts[year]) {
        yearToPosts[year].push(node);
      } else {
        yearToPosts[year] = new Array();
        yearToPosts[year].push(node);
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
                blogPosts={yearToPosts[year]}/>
            )
          })}
        </div>
        <hr
          style={{
            marginTop: '1.75rem',
            marginBottom: '1.75rem',
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default ArchivePage

export const pageQuery = graphql`
  query ArchiveQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { 
        frontmatter: { 
          layout: { 
            eq: "post"
          },
          status: {
            eq: "published"
          }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`