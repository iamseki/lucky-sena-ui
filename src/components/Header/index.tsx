import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'
import { MenuNav } from './MenuNav'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'

export function Header() {
  // check screens and conditionals
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4" // =1rem, verificar na documentação https://chakra-ui.com/docs/theming/theme#spacing
      px="6"
      align="center"
      justify="space-between"
    >
      <Logo />
      <MenuNav />
      <Flex
        align="center"
        // joga o componento totalmente pra direita
        //ml="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex >
  )
}