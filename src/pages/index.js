import React from 'react'
import ProjectPage from '../components/ProjectPage'
import './temp.css';

export default function ProjectsIndex(props) {
  return (<ProjectPage
    title="Projects"
    posts={props.data.allMarkdownRemark.edges}
  />);
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
