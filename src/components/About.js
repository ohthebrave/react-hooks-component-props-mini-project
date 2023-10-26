import React from 'react'

export default function About({
    imageSrc = "https://via.placeholder.com/215",
    about
}) {
  return (
    <aside>
        <img src={imageSrc} alt="blog logo" />
        <p>{about}</p>
    </aside>
  )
}
