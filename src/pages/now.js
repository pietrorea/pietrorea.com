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

        <p>Here’s what I’m currently working on (last updated Aug 13, 2020):</p>

        <ul>
          <li>
            As of this writing, I&#39;m one week into my new job at Capital One. After almost exactly three years at <a href="https://upside.com">Upside</a>, I joined Capital One&#39;s mobile engineering team to work on their iOS app. After a couple years doing full stack web development, this is a nice return to Swift and native mobile development. 
          </li>
          <li>
            I’m on the lookout for a new programming side project. I’m in the early stages of research for a new side project. It’s likely going to be a Chinese dictionary app for iOS.
          </li>
          <li>
            I’m getting back to playing the violin for my own enjoyment. The last song I learned how to play is <a href="https://www.musicnotes.com/sheetmusic/mtd.asp?ppn=MN0188250">Rains of Castamere</a> from GoT.
          </li>
        </ul>

        <h2>Books I’m reading</h2>

        <p>I’m not a voracious reader, although I would like to become one. At any point in time I’m likely reading a book from <a href="http://www.squeakland.org/resources/books/readingList.jsp">Alan Kay’s reading list</a>, a technical book and some fiction. I’m currently reading:</p>

        <ul>
          <li>
            &quot;The Secret of Childhood&quot; by Maria Montessori
          </li>
          <li>
            &quot;El obsceno pájaro de la noche&quot; by José Donoso
          </li>
          <li>
            <a href="https://www.oreilly.com/library/view/effective-typescript/9781492053736/">Effective TypeScript</a> by <a href="https://www.danvk.org/">Dan Vanderkam</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/A%5C_Farewell%5C_to%5C_Arms">A Farewell to Arms</a> by Ernest Hemingway
          </li>
        </ul>

        <p>This <em>now</em> page was inspired by <a href="https://tyler.io">Tyler Hall</a>, who was inspired by <a href="https://mattgemmell.com/now/">Matt Gemmell</a>, who was inspired by <a href="https://sivers.org/nowff">Derek Sivers</a>. If you have your own site, you can make one too.</p>
      <Bio />
    </div>
  </Layout>
)

export default NowPage