import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as styles from './Categories.module.scss'
import _ from 'lodash'

const Categories = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <div className={styles.categoryBox}>
      {data.allMarkdownRemark.group.map(category => (
        <li key={category.fieldValue} className={styles.item}>
          <Link
            to={`/${_.kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
            activeClassName={props.activeClassName}
          >
            {category.fieldValue}
            <strong> ({category.totalCount})</strong>
          </Link>
        </li>
      ))}
    </div>
  )
}

export default Categories
