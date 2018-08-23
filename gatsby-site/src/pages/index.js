import React from 'react'
import styled from 'styled-components'

import Hero from '../components/hero'
import PostLink from '../components/post-link'

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ContentColumn = styled.div`
  flex: 0 0 50%;

  @media (max-width: 700px) {
    flex: 0 0 100%;
  }
`

const IndexPage = ({
  data: {
    hacks: { edges: hacksEdges },
    posts: { edges: postsEdges },
  },
}) => {
  const posts = postsEdges.map(edge => (
    <li key={edge.node.id}>
      <PostLink post={edge.node} />
      <div>{edge.node.excerpt}</div>
    </li>
  ))

  const hacks = hacksEdges.map(edge => (
    <li key={edge.node.id}>
      <PostLink post={edge.node} />
      <div>{edge.node.excerpt}</div>
    </li>
  ))

  return (
    <div>
      <Hero />
      <ContentContainer>
        <ContentColumn>
          <h3>Posts</h3>
          <ul>{posts}</ul>
        </ContentColumn>

        <ContentColumn>
          <h3>Hacks</h3>
          <ul>{hacks}</ul>
        </ContentColumn>
      </ContentContainer>
    </div>
  )
}

export default IndexPage

export const postsQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }

    hacks: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/(hacks)/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 1000)
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
