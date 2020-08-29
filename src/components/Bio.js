import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    const contactLink = {
      marginRight: '0.75em'
    };
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
            Written by <strong>Pietro Rea</strong>, a software developer, team lead and author living in northern Virginia.
          </div>
          <div style={{
            display: 'flex'
          }}>
            <div style={contactLink}>
              <a href="https://github.com/pietrorea" target="_blank">
                Github
              </a>
            </div>
            <div style={contactLink}>
              <a href="https://twitter.com/pietrorea" target="_blank">
              Twitter
              </a>
            </div>
            <div style={contactLink}>
              <a href="https://www.linkedin.com/in/pietrorea/" target="_blank">
                LinkedIn
              </a>
            </div>
            <div style={contactLink}>
              <Link to="/about">
                About
              </Link>
            </div>
            <div style={contactLink}>
              <Link to="/now">
                Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
