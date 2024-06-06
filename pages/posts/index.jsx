import { getAllPosts } from '../../lib/posts-util'
import AllPosts from './AllPosts'

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 3600,
  }
}
