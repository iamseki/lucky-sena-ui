import { Box, Button, Center, Divider, Flex, Kbd, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { GiEightBall } from 'react-icons/gi'

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh" align='center' justify='center'>
      <Header />

      <Flex direction="column" w="100vw" h="100vh" my="6" maxWidth={1480} px="6" alignItems='center' align='center' justify='space-evenly'>
        <Flex fontSize="2xl">
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>05</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>17</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>32</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>46</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>50</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>59</Kbd>
        </Flex>

        <Flex fontSize="2xl">
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>05</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>17</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>32</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>46</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>50</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>59</Kbd>
        </Flex>

        <Flex fontSize="2xl">
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>05</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>17</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>32</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>46</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>50</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>59</Kbd>
        </Flex>

        <Flex fontSize="2xl">
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>05</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>17</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>32</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>46</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>50</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>59</Kbd>
        </Flex>

        <Flex fontSize="2xl">
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>05</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>17</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>32</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>46</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>50</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>59</Kbd>
        </Flex>

        <Flex fontSize="2xl">
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>05</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>17</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>32</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>46</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>50</Kbd>
          <Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>59</Kbd>
        </Flex>
        <Flex align='center' justify='center' direction='column' mt='5'>
          <Divider width='2xl' />
          <Button leftIcon={<GiEightBall size="24px" />} colorScheme="green" variant='solid' margin='4'>
            Generate
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
