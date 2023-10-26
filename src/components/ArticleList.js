import React from 'react'
import Article from './Article'
export default function ArticleList(props) {
  return (
    <main>
        {props.posts.map(post => (
            <Article
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date || "January 1, 1970"}
                minutes={'☕️' || post.minutes}
                preview={post.preview}
            />))}
    </main>
  )
}
