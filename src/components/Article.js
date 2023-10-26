import React from 'react'

export default function Article(props) {
  return (
    <article key={props.id} >
        <h3>{props.title}</h3>
        <small>{props.date} {props.minutes}</small>
        <p>{props.preview}</p>
    </article>
  )
}
