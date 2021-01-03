import React from 'react'
import Link from 'gatsby-link'

import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import EmailIcon from 'react-icons/lib/fa/envelope';

import { rhythm } from '../../utils/typography'
import './bio.css'

export function SocialLinks() {
  const size = 20;
  return (<div className="social-media-container">
    <a href="https://twitter.com/ryapapap"><TwitterIcon size={size} /></a>
    <a href="https://github.com/ryapapap"><GithubIcon size={size} /></a>
    <a href="https://www.linkedin.com/in/ryan-patterson-ba7b68111/"><LinkedInIcon size={size} /></a>
    <a href="mailto:ryapapap@gmail.com?Subject=Hi 👋"><EmailIcon size={size} /></a>
  </div>)
}

class Bio extends React.Component {
  render() {
    return (
      <div className="bio-container">
        <Link 
          to="/"
          style={{
            backgroundImage: 'none',
            textShadow: 'none',
          }}
        >
          <h4
            style={{
              color: 'white',
              margin: 10,
              marginBottom: 3,
              letterSpacing: 1.75,
            }}
          >
            Ryan Patterson
          </h4>
          <span
            style={{
              color: '#aaa',
              fontSize: 16,
            }}
          >
            creative
          </span>
        </Link>
        <SocialLinks />
      </div>
    )
  }
}

export default Bio
