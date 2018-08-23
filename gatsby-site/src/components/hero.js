import React from 'react'
import styled from 'styled-components'

import Box from '../components/box'
import PostLink from '../components/post-link'

const Container = styled.section`
  margin: 1.45rem 0;
`

const Header = styled.h1`
  margin-bottom: 0.725rem;
`

const Message = styled.p`
  margin: 0;
`

const Hero = () => {
  return (
    <Container>
      <Header>Hello.</Header>
      <Message>
        Software engineer and environmentalist. Pushing code at Acast,
        previously at Tictail.
      </Message>
    </Container>
  )
}

export default Hero
