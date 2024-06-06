import React from 'react'
import classes from './PostContent.module.css'
import PostHeader from './PostHeader'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function PostContent({ post }) {
  // we are overriding img tag by markdown to our own Next Image compo
  const customRenderers = {
    img(image) {
      console.log(image.src)
      return (
        <Image
          src={`/images/posts/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      )
    },
    // p(paragraph) {
    //   // as markdown displays all content in paragraphs, even img.
    //   //  React doesn't like, to get rid of the err, we override para that has img with just img
    //   const { node } = paragraph
    //   console.log(node)

    //   if (node.children[0].type === 'image') {
    //     if (node.children[0].tagName === 'img') {
    //       const image = node.children[0]

    //       return (
    //         <div className={classes.image}>
    //           <Image
    //             src={`/images/posts/${image.properties.src}`}
    //             alt={image.alt}
    //             width={600}
    //             height={300}
    //           />
    //         </div>
    //       )
    //     }
    //     return <p>{paragraph.children}</p>
    //   }
    // },
  }
  return (
    <article className={classes.content}>
      <PostHeader post={post} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}
