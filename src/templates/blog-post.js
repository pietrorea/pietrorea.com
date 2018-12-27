import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {this.isPostValid(previous) && (
              <li>
                <Link to={`/${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {this.isPostValid(next) && (
              <li>
                <Link to={`/${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Layout>
    )
  }

  isPostValid(post) {
    return post && (post.frontmatter.status === 'published');
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
