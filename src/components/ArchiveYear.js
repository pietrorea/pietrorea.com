import React from 'react';
import get from 'lodash/get'
import { Link } from 'gatsby'
import moment from 'moment'

class ArchiveYear extends React.Component {
  render() {
    const { year, blogPosts } = this.props;
    return (
      <div>
        <h1>{year.toString()}</h1>
          {blogPosts.map((post) => {
            const title = get(post, 'frontmatter.title') || post.fields.slug
            const date = get(post, 'frontmatter.date') || '';
            const displayDate = moment(date).format('MMMM DD, YYYY');

            return (
              <div key={displayDate}>
                <Link to={post.fields.slug}>
                  {title}
                </Link>
                {' ‣ '}
                {displayDate}
              </div> 
            )
          })}
      </div>
    )
  }
}

export default ArchiveYear