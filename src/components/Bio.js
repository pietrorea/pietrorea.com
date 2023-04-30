import React from "react";
import profilePic from "./headshot.jpeg";
import { Link } from "gatsby";

const Bio = () => {
  const contactLink = {
    marginRight: "0.5em",
  };
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "4.375rem",
      }}
    >
      <img
        src={profilePic}
        alt={`Pietro Rea`}
        style={{
          marginRight: "0.875rem",
          marginBottom: 0,
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "1.75rem",
        }}
      />
      <div>
        <div>
          Written by Pietro Rea, a software engineer, engineering manager and
          author from northern Virginia.
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div style={contactLink}>
            <Link to="/about">About</Link>
          </div>
          <div style={contactLink}>
            <a href="https://github.com/pietrorea" target="_blank">
              Github
            </a>
          </div>
          <div style={contactLink}>
            <a rel="me" href="https://mastodon.replacementhipster.com/@pietro">
              Mastodon
            </a>
          </div>
          <div style={contactLink}>
            <a href="https://www.linkedin.com/in/pietrorea/" target="_blank">
              LinkedIn
            </a>
          </div>
          <div style={contactLink}>
            <Link to="/archive">Archive</Link>
          </div>
          <div style={contactLink}>
            <Link to="/subscribe">Subscribe</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
