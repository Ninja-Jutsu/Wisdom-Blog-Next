import classes from './PostGrid.module.css'
import PostItem from './PostItem'
export default function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post} />
      })}
    </ul>
  )
}
