import Link from 'next/link'
import Image from 'next/image'
import classes from './PostItem.module.css'

export default function PostItem({ post }) {
  const { title, image, summary, date, slug } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${image}`

  return (
    <>
      <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}

              // layout='responsive' // this is equivalent to setting image width to 100% in css
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time datetime={date}>{formattedDate}</time>
            <p>{summary}</p>
          </div>
        </Link>
      </li>
    </>
  )
}
