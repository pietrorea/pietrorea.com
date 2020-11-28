import React from 'react'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import Layout from '../components/layout-component'
import '../../static/app.css'

const siteTitle = 'pietrorea\'s blog';

const AboutPage = (props) => (
  <Layout location={props.location}>
    <div>
      <Helmet title={`About | ${siteTitle}`} />
      <h1>About</h1>

        <p>Hello 👋, my name is Pietro Rea and I am a software developer, team lead and author living in northern Virginia.</p> 
          
        <p>Over the years I’ve discovered that I am a <a href="https://medium.com/@sherifmansour/product-engineers-f424da766871">product engineer</a>, which means I engage with the “why”, build MLPs (minimum lovable products) and pair up well with product, UX and design.</p>

        <p>I’ve worked on mobile development since iOS 4. In the past I’ve also been a lead engineer, tech lead and people manager for mobile and full-stack engineering teams. I love being part of tightly-knit teams built on trust that jive well together and make things happen. I want to join them or build them.</p>

        <p>I sometimes write books and articles, mostly about software development on Apple platforms. I love sharing what I've learned in all mediums.</p>

        <h2>What I&#39;ve done before</h2>

        <p>I&#39;ve held a number of engineering positions across many industries including travel, e-commerce an media. Right now I work on Capital One’s mobile engineering team where I help build digital tools for Capital One's credit card customers.</p>

        <p>Previously, I was a team lead at <a href="https://upside.com">Upside Business Travel</a>, a startup focused on building solutions for the unique problems of business travelers and their employers. While I was there I hired engineers for Upside&#39;s mobile and full stack teams and together we worked on Upside's profile & authentication systems, Upside's corporate offering and the iOS and Android apps. </p>

        <p>Prior to joining Upside, I started a software development agency called Sweetpea Mobile, where I helped startups like <a href="https://www.gc.com">GameChanger</a> and <a href="https://techcrunch.com/2017/03/27/spotify-acquires-content-recommendation-startup-mightytv/">MightyTV</a> with their mobile apps. I was a one-man show for most engagements and hired contractors for others. I operated as an agency for almost two years until I ramped down operations in 2017. Sweetpea Mobile is dormant but active! Reach out if you think I can help you.</p>

        <p>Before Sweetpea Mobile, I was a mobile engineer at <a href="https://en.wikipedia.org/wiki/Diapers.com">Quidsi</a>, the parent company for Diapers.com, Soap.com and several other e-commerce brands. As a team, we mastered the art of “one-handed shopping”, shipping five-star iOS and Android apps that enabled parents to get all their shopping done with one hand while an infant was in the other. Quidsi was a subsidiary of Amazon so I also worked on multiple platform integration projects. And before Quidsi, I worked at the <a href="https://www.huffingtonpost.com">Huffington Post</a> in New York City where I built news and video apps.</p>

        <p>I hold a bachelor’s degree in Economics from Princeton University. I decided on my major after reading <a href="https://www.amazon.com/Worldly-Philosophers-Economic-Thinkers-Seventh/dp/068486214X">The Worldly Philosophers</a> by Robert Heilbroner, although I spent most of my time at Princeton studying Chinese and Computer Science. 你好!</p>

        <h2>Things I&#39;ve written </h2>

        <ul>
          <li><a href="/2020/08/18/coming-soon-publishing-to-the-app-store-book">Publishing to the App Store</a></li>
          <li><a href="https://www.amazon.com/Core-Data-Tutorials-Sixth-Persisting/dp/1950325040/">Core Data by Tutorials, 1st through 8th editions</a></li>
          <li><a href="https://www.amazon.com/iOS-Tutorials-Learning-APIs-Swift/dp/1942878117/">iOS 9 by Tutorials</a></li>
          <li><a href="https://www.amazon.com/iOS-7-Tutorials-Christine-Abernathy/dp/0989675106">iOS 7 by Tutorials</a></li>
          <li> A more complete list of articles and tutorials lives <a href="https://www.raywenderlich.com/u/pietrorea">here</a></li>
        </ul>

        <h2>Where else to find me </h2>

        <p>You can find me on <a href="https://twitter.com/pietrorea">Twitter</a> and <a href="https://www.linkedin.com/in/pietrorea/">LinkedIn</a>. You can also drop me a line at pietro - at - pietrorea.com.</p>
      <Bio />
    </div>
  </Layout>
)

export default AboutPage