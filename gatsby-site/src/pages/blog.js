import React from 'react'
import PostLink from '../components/post-link'

const SecondPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <li key={edge.node.id}>
        <PostLink post={edge.node} />
        <div>{edge.node.excerpt}</div>
      </li>
    ))

  return (
    <div>
      <h1>Blog Archive</h1>
      <ul>{posts}</ul>
    </div>
  )
}

export default SecondPage

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
