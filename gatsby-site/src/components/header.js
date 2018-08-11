import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

const Container = styled.div`
  box-shadow: 0 0 1px rgba(23, 27, 31, 0.2);
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
`

const LinkWrapper = styled.h5`
  margin: 0;
`

const Link = styled(GatsbyLink)`
  color: #ff1947;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <LinkWrapper>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </LinkWrapper>
    </Wrapper>
  </Container>
)

export default Header
