import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts') // get the directory path

function getPostsFiles() {
  return fs.readdirSync(postsDirectory)
}

// read data from a file
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '') // remove the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent) // use grey matter to get metadata and the normal content

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export function getAllPosts() {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile)
  })

  const sortedPost = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))

  return sortedPost
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter((post) => post.isFeatured === true)

  return featuredPosts
}

export function getPostsSlugs() {
  const postFiles = getPostsFiles()
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile)
  })
  const allSlugs = allPosts.map((post) => post.slug)

  return allSlugs
}
