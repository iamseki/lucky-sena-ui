import { Box, Button, Center, CircularProgress, Divider, Flex, Input, Kbd, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { GiEightBall } from 'react-icons/gi'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useRouter } from "next/router";

const load = false

const Home: NextPage = () => {
  const [excludeds, setExcludeds] = useState('')
  const [bets, setBets] = useState([]);
  const router = useRouter();
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  })

  const handleExcludedsChange = (event: any) => setExcludeds(event.target.value)

  const handleGenerateButton = async (event: any) => {
    event.preventDefault()
    
    const headers = new Headers({
      'Authorization': `Basic ${user.token}`
    })

    const response = await fetch('http://localhost:8080/v1/bets/generate?bets=7', { headers, mode: 'cors' })
    const data = await response.json()
    setBets(data.bets)
  }

  return (
    <Flex direction="column" h="100vh" align='center' >
      <Header />

      <Flex direction="column" w="100vw" h="100vh" my="6" maxWidth={1480} px="6" alignItems='center' align='center' justify='space-evenly'>
        {load ? <CircularProgress isIndeterminate color='green.300' /> : (bets && bets.map((bet, index) => (
          <Flex fontSize="2xl" key={index}>
            {bet.Numbers.map(n => (<Kbd key={n+index} borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>{n < 10 ? `0` + n : n}</Kbd>))}
          </Flex>
        )))
        }

        <Flex align='center' justify='center' direction='column' mt='5'>
          <Divider width='2xl' />
          <Input
            width='sm'
            mt='4'
            placeholder='numbers to exclude'
            focusBorderColor='green.100'
            onChange={handleExcludedsChange}
            value={excludeds}
          />
          <Button
            leftIcon={<GiEightBall size="24px" />}
            colorScheme="green"
            variant='solid'
            margin='4'
            onClick={handleGenerateButton}
          >
            Generate
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
