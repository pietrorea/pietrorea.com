import React from "react";
import { Link } from "gatsby";
import "../../static/app.css";

const Layout = (props) => {
  const { location, children } = props;
  let header;

  let rootPath = `/`;
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`;
  }

  if (location.pathname === rootPath) {
    header = (
      <h1 className="siteTitle">
        <Link
          style={{
            boxShadow: "none",
            textDecoration: "none",
            color: "inherit",
          }}
          to={"/"}
        >
          pietrorea's blog
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
          marginBottom: "-1.75rem",
        }}
      >
        <Link
          style={{
            boxShadow: "none",
            textDecoration: "none",
            color: "inherit",
          }}
          to={"/"}
        >
          pietrorea's blog
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "42rem",
        padding: "2.625rem 1.875rem",
      }}
    >
      {header}
      {children}
    </div>
  );
};

export default Layout;
