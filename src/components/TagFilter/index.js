import React from 'react'
import map from 'lodash/map'
import { rhythm } from '../../utils/typography'

export default class TagFilter extends React.Component {
  /*
  - tagList
  - filter
  - onToggle
  */
  onClick = (event) => {
    this.props.onToggle(event.currentTarget.value);
  }

  render(){ 
    return (<div
      style={{
        padding: 20,
        pageBreakInside: 'avoid',
        breakInside: 'avoid',
        textAlign: 'center',
        borderBottom: '1px solid gray',
      }}
    >
      <button
        value=""
        onClick={this.onClick}
        className={`tag-filter-btn${this.props.filter === '' ? ' selected': ''}`}
      >
        All
      </button>
      {map(this.props.tagList, (tag, i) => 
        <button
          value={tag}
          onClick={this.onClick}
          key={i}
          className={`tag-filter-btn${this.props.filter === tag ? ' selected': ''}`}
        >
          {tag}
        </button>
      )}
    </div>);
  }
}
