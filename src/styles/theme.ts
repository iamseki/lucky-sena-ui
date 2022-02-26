import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: '#f4fff5',
        color: 'black',
        bgGradient: 'radial(to-l, #f4fff5, #f0efff)'
      }
    }
  }
})