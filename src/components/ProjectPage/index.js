import React from 'react'
import Masonry from 'react-masonry-component'
import Link from 'gatsby-link'
import get from 'lodash/get'
import filter from 'lodash/filter'
import difference from 'lodash/difference'
import uniq from 'lodash/uniq'
import sortBy from 'lodash/sortBy'
import { Container } from 'react-responsive-grid'
import Helmet from 'react-helmet'

import Project from '../../components/Project'
import TagFilter from '../../components/TagFilter'
import { rhythm } from '../../utils/typography'


export default class ProjectPage extends React.Component {
  state = {
    filter: '',
  };

  toggleFilter = (filter) => {
    this.setState({ filter });
  }

  render() {
    const siteTitle = get(this, 'props.title');
    let posts = get(this, 'props.posts');
    if (!posts) { return null }

    // get all used tags
    const tags = sortBy(
      uniq(
        posts.reduce((tags, { node }) => tags.concat(node.frontmatter.tags), [])
      )
    );
    
    // filter posts by filter
    if (this.state.filter !== '') {
      posts = filter(posts, ({ node }) =>
        node.frontmatter.tags.includes(this.state.filter)
      );
    }

    return (<div>
      <Helmet title={siteTitle} />
      <div
        style={{
          backgroundColor: '#edf7f3',
          minHeight: '100vh',
        }}
      >
        <Container
          style={{
            maxWidth: rhythm(38),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: rhythm(1.75),
              marginTop: 0,
            }}
          >
            {siteTitle}
          </h1>
          <TagFilter 
            tagList={tags}
            filter={this.state.filter}
            onToggle={this.toggleFilter}
          />
          <div 
            className="grid"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
          <Masonry
            options={{
              isFitWidth: true,
              columnWidth: 325,
            }}
          >
            {posts.map(({ node }, i) => <Project 
              link={node.fields.slug}
              {...node.frontmatter}
              key={i}
            />)}
          </Masonry>
          </div>
        </Container>
      </div>
    </div>);
  }
}
