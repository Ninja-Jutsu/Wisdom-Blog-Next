import { revalidatePath } from 'next/cache'
import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostData, getPostsSlugs } from '../../lib/posts-util'

export default function PostDetailPage({ post }) {
  return (
    <>
      <PostContent post={post} />
    </>
  )
}

export function getStaticProps({ params }) {
  const { slug } = params

  const post = getPostData(slug)
  const imagePath = `/images/posts/${post.image}`
  post.image = imagePath
  
  return {
    props: {
      post,
    },
    revalidate: 1,
  }
}

export function getStaticPaths() {
  return {
    paths: getPostsSlugs().map((slug) => ({ params: { slug: slug } })), // we defined all paths
    fallback: false,
  }
}
