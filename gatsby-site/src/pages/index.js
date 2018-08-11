import React from 'react'
import Link from 'gatsby-link'
import PostLink from '../components/post-link'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <li key={edge.node.id}>
        <PostLink post={edge.node} />
      </li>
    ))

  return (
    <div>
      <div>
        <h2>Blog Archive</h2>
        <ul>{posts}</ul>
      </div>

      <div>
        <h2>Pet Projects</h2>
        <ul>
          <li>
            <h3>Arduino Morse Tweet Bot</h3>
            <p>
              This quick hack is created using an Arduino and the Johnny-Five
              library. It listens for new tweets with the keyword “teknodrom”
              (could be whatever) and sounds them in morse code on a connected
              Arduino using a piezo.
            </p>
          </li>
          <li>
            <h3>Daily Wiki Bot</h3>
            <p>
              Daily Wiki Bot is a twitter bot. It tweets historical facts which
              it draws from Wikipedia.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
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
