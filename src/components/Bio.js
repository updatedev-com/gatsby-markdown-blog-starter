import React from 'react'
import { Follow } from 'react-twitter-widgets'
import * as styles from './Bio.module.scss'

const Bio = ({ author, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={author.avatar}
      alt={author.name}
    />
    <span>
      Written by <strong>{author.name}</strong>.
      {` `}
      <Follow
        username={author.twitter}
        options={{ count: expanded ? true : 'none' }}
      />
    </span>
  </>
)

export default Bio
