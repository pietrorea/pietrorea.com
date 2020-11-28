import React from 'react'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import Layout from '../components/layout-component'

const siteTitle = 'pietrorea\'s blog';

const NowPage = (props) => (
  <Layout location={props.location}>
    <div>
      <Helmet title={`Now | ${siteTitle}`} />
      <h1>Now</h1>

        <p>Here’s what I’m currently working on (last updated Nov 27, 2020):</p>

        <ul>
          <li>
            <p>I'm five months into my contract at Capital One. After almost exactly three years at Upside doing full-stack and mobile development, I joined Capital One&#39;s mobile engineering team as a full-time contractor.</p> 
            <p>I'm happy that I'm getting the chance to go much deeper into accessibility, localization and test automation than ever before on top of the usual feature work I'm accustomed to. My team works on credit card rewards for the Capital One iOS app and (ironically) we'll soon be switching gears to work on travel and travel rewards features.</p>  
          </li>
          <li>
            I'm four chapters into my new book, "Publishing to the App Store". This is a book that I've wanted to write for years and years. It's certainly tough having a full-time job, writing this book and being a husband and dad of two, but the pandemic has added a little bit of slack that I'm using for the book. The early access version is set to come out in the next few weeks and the whole thing should be done early next year. 
          </li>
        </ul>

        <h2>Books I’m reading</h2>

        <p>At any point in time I’m likely reading a book from <a href="http://www.squeakland.org/resources/books/readingList.jsp">Alan Kay’s reading list</a>, a technical book and some fiction. I’m currently reading:</p>

        <ul>
          <li>
            Nurtured by Love by Shinichi Suzuki
          </li>
          <li>
            RxSwift: Reactive Programming with Swift by Scott Gardner, Florent Pillet and Marin Todorov
          </li>
        </ul>

        <p>This <em>now</em> page was inspired by <a href="https://tyler.io">Tyler Hall</a>, who was inspired by <a href="https://mattgemmell.com/now/">Matt Gemmell</a>, who was inspired by <a href="https://sivers.org/nowff">Derek Sivers</a>. If you have your own site, you can make one too.</p>
      <Bio />
    </div>
  </Layout>
)

export default NowPage