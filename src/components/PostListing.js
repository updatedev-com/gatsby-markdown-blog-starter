import React from 'react'
import { Link } from 'gatsby'
import * as styles from './PostsListing.module.scss'

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = []
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  const postList = getPostList()
  return (
    <div className={styles.articleList}>
      {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <article className={styles.articleBox}>
              <div className={styles.right}>
                <h3>{post.title}</h3>
                <div className={styles.meta}>
                  {post.date} &mdash; {post.timeToRead} Min Read{' '}
                </div>
                <p>{post.excerpt}</p>
                {post.categories.length > 0 && (
                  <div className={styles.articleCategoriesBox}>
                    {post.categories.map(category => (
                      <div>
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
    </div>
  )
}

export default PostListing
