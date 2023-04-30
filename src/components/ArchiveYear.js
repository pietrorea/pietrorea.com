import React from "react";
import { Link } from "gatsby";
import moment from "moment";

const ArchiveYear = (props) => {
  const { year, blogPosts } = props;
  return (
    <div>
      <h1>{year.toString()}</h1>
      {blogPosts.map((post) => {
        const displayDate = moment(post.date).format("MMMM DD, YYYY");
        return (
          <div key={displayDate}>
            <Link to={`${post.slugDate}${post.slug}`}>{post.title}</Link>
            {" ‣ "}
            {displayDate}
          </div>
        );
      })}
    </div>
  );
};

export default ArchiveYear;
