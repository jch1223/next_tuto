import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="hello next js" />
        <PostLink title="learn next js awesome" />
        <PostLink title="deploy apps with zeit" />
      </ul>
    </Layout>
  )
}
