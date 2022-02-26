import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Chris da Sorte</Text>
          <Text fontSize="small">chseki</Text>
        </Box>
      )}
      <Avatar size="md" name="ChrisGuardinha"/>
    </Flex>
  );
}