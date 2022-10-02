import React from "react";
import Helmet from "react-helmet";
import Bio from "../components/Bio";
import Layout from "../components/layout-component";

const SubscribePage = (props) => (
  <Layout location={props.location}>
    <div>
      <Helmet title={"Subscribe | pietrorea.com"} />
      <h1>Subscribe via RSS</h1>

      <p>
        To subscribe to all articles for this blog via RSS, add the following
        URL to your feeds:
      </p>

      <pre class="language-bash">https://pietrorea.com/rss.xml</pre>

      <p>
        If you don’t yet have an RSS reader installed,{" "}
        <a href="https://netnewswire.com">NetNewsWire</a> is an excellent choice
        for both iOS and macOS. It's free and open source.
      </p>
    </div>
    <hr
      style={{
        marginTop: "3.75rem",
        marginBottom: "1.75rem",
      }}
    />
    <Bio />
  </Layout>
);

export default SubscribePage;
