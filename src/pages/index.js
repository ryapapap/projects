import React from 'react'
import ProjectPage from '../components/ProjectPage'
import {SocialLinks} from '../components/Bio';
import './temp.css';

export default function ProjectsIndex(props) {
  return (<div>
    <p>
    My name is Ryan. I’m based in the San Francisco Bay Area. I have worked as a software engineer on a wide range of applications including AI, healthcare, and financial reporting in web, mobile, desktop, and server contexts. I enjoy the craft in building software and the processes that enable teams to work in healthy ways.
    </p>
    <p>
    I am interested in the ways we relate to technology. Software is eating the world. It’s eating us too. We can’t separate the messiness of our lives from the ways we use technology. I want to understand how we improve who we are and how we relate to each other on deeper levels. I wonder if software could help. 
    </p>
    <p>
    To this end, I’m trying to craft expressions of care and understand the structure and expression of our ideas. I’m experimenting in digital and irl ways. Soon, I hope, I’ll have a better way of sharing all those things, but for now, here’s a few links to some seedlings:
    </p>
    <ul>
      <li><a href="https://www.wennoodleshop.com/">
        My restaurant, Wen Noodle Shop 
      </a></li>
      <li><a href="https://bl.ocks.org/ryapapap/raw/3b24a73bc8c7db3115d782a81f54b8f9/">
        A short poem about silence
      </a></li>
      <li><a href="https://epic-bassi-b64d33.netlify.app/">
      An under construction web home
      </a></li>
      <li><a href="https://vimeo.com/414113022">
      A silly VR experiment
      </a></li>
    </ul>
    <p>
    I have deep loves for poetry, literature, and large bodies of water.
    </p>
    Get in touch 😃

    <SocialLinks />
  </div>);
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { ne: null } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            url
            thumbnail {
              publicURL
            }
            tags
          }
        }
      }
    }
  }
`
