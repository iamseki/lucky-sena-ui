import { Box, Button, Center, CircularProgress, Divider, Flex, Input, Kbd, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { GiEightBall } from 'react-icons/gi'
import { useState } from 'react'

let response = {
  "bets": [
    {
      "Numbers": [
        6,
        9,
        20,
        28,
        46,
        58
      ]
    },
    {
      "Numbers": [
        1,
        9,
        12,
        27,
        39,
        42
      ]
    },
    {
      "Numbers": [
        7,
        26,
        36,
        38,
        48,
        57
      ]
    },
    {
      "Numbers": [
        5,
        11,
        30,
        36,
        38,
        53
      ]
    },
    {
      "Numbers": [
        18,
        28,
        30,
        48,
        53,
        54
      ]
    },
    {
      "Numbers": [
        1,
        6,
        20,
        21,
        39,
        46
      ]
    },
    {
      "Numbers": [
        1,
        6,
        28,
        36,
        38,
        48
      ]
    }
  ]
}

const load = false

const Home: NextPage = () => {
  const [excludeds, setExcludeds] = useState('')

  const handleExcludedsChange = (event: any) => setExcludeds(event.target.value)

  const handleGenerateButton = async (event: any) => {
    event.preventDefault()
    
    const user = ''
    const pass = ''

    const encodedPermissions = Buffer.from(`${user}:${pass}`, 'utf-8').toString('base64')
    const headers = new Headers({
      'Authorization': `Basic ${encodedPermissions}`
    })

    const response = await fetch('', { headers, mode: 'cors' })
    const data = await response.json()
    console.log(data)
  }

  return (
    <Flex direction="column" h="100vh" align='center' >
      <Header />

      <Flex direction="column" w="100vw" h="100vh" my="6" maxWidth={1480} px="6" alignItems='center' align='center' justify='space-evenly'>
        {load ? <CircularProgress isIndeterminate color='green.300' /> : (response && response.bets.map((bet, index) => (
          <Flex fontSize="2xl" key={index}>
            {bet.Numbers.map(n => (<Kbd borderRadius="50%" margin='2' fontSize='md' padding={3} backgroundColor='white' color='green.700'>{n < 10 ? `0` + n : n}</Kbd>))}
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
