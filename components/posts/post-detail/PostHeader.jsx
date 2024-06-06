import Image from 'next/image'
import React from 'react'
import classes from './PostHeader.module.css'

export default function PostHeader({ post }) {
  return (
    <header className={classes.header}>
      <h1>{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={200}
        height={200}
      />
    </header>
  )
}
