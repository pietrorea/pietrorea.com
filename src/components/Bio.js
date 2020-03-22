import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Pietro Rea`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(1),
          }}
        />
        <div>
          <div>
            Written by <strong>Pietro Rea</strong>, a software engineer in Washington D.C.
          </div>
            <a href="https://github.com/pietrorea">
              Github
            </a>
            {'  '}
            <a href="https://twitter.com/pietrorea">
            Twitter
            </a>
            {'  '}
            <a href="https://www.linkedin.com/in/pietrorea/">
              Linkedin
            </a>
            {'  '}
            <Link to="/now">
              Now
            </Link>
        </div>
      </div>
    )
  }
}

export default Bio
