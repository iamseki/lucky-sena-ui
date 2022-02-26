import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../../components/Header'

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <h1>BETS</h1>
    </Flex>
  )
}

export default Home
