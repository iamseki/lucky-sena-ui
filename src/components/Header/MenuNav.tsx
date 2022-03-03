import { Center, Divider, HStack, Icon, Link } from "@chakra-ui/react";
import { VscKebabVertical } from 'react-icons/vsc'
import NextLink from "next/link"

export function MenuNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="green.700"
      borderColor="green.200"
    >
      <NextLink href="/bets">
        <Link fontFamily='monospace' fontWeight="semibold">
          Bets
        </Link>
      </NextLink>

      <Center height='12px'>
        <Divider orientation='vertical' />
      </Center>

      <NextLink href="/dashboard">
        <Link fontFamily='monospace' fontWeight="semibold">
          Home
        </Link>
      </NextLink>

      <Center height='12px'>
        <Divider orientation='vertical' />
      </Center>
      
      <NextLink href="/results">
        <Link fontFamily='monospace' fontWeight="semibold">
          Results
        </Link>
      </NextLink>
    </HStack>
  );
}