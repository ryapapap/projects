import React from 'react'
import Link from 'gatsby-link'

import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import EmailIcon from 'react-icons/lib/fa/envelope';

import { rhythm } from '../../utils/typography'

/*
TODO:
- remove even more css from temp.css (and rename it)
- remember nav 'home'
- mobile for bio..
*/

function TagList(props) {
  return (<ul
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      color: '#666',
      margin: '0 10px 15px',
      padding: 0,
    }}
  >
    {props.tags.map((tag, i) => <li 
        key={i}
        style={{
          borderRadius: 3,
          fontSize: 14,
          margin: 3,
          padding: '0 7px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}
      >
        {tag}
      </li>)
    }
  </ul>);
}

function ProjectLink(props) {
  const style = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'white',
    textDecoration: 'none',
    borderRadius: 2,
    borderCollapse: 'separate',
    transition: 'all 0.3s',
    maxWidth: 250,
    backgroundImage: 'none',
  };

  // Use react router if it's an internal link,
  // or a direct link if it's not (supa clunky)
  if (props.url) {
    return (<a href={props.url} style={style} className="project-card">{props.children}</a>);
  } else {
    return (<Link to={props.link} style={style} className="project-card">{props.children}</Link>);
  }
}

export default function Project(props) {  
  return (<div
    style={{
      padding: 20,
      pageBreakInside: 'avoid',
      breakInside: 'avoid',
    }}
  >
    <ProjectLink {...props}>
      {props.thumbnail && <img 
        src={props.thumbnail.publicURL}
        style={{
          width: '100%',
          maxHeight: 150,
          objectFit: 'cover',
          marginBottom: 0,
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
        alt=""
      />}
      <h3>{props.title}</h3>
      <TagList tags={props.tags} />
    </ProjectLink>
  </div>);
}
