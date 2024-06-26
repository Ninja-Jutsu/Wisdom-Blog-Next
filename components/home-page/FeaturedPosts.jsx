import PostsGrid from '../posts/PostsGrid'
import classes from './FeaturedPosts.module.css'

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
