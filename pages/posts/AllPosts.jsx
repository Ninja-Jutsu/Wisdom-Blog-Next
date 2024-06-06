import PostsGrid from '../../components/posts/PostsGrid'
import classes from './AllPosts.module.css'
export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>ALl posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  )
}
