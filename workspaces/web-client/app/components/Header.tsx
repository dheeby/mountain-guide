import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box borderBottom="1px solid #E2E8F0">
      <Flex
        justifyContent="space-between"
        p="12px 48px"
        maxWidth="100vw"
        m="0 auto"
      >
        <HStack>
          <NextLink href="/">
            <Text>Peak List</Text>
          </NextLink>
        </HStack>
        <HStack gap="32px">
          <NextLink href="/list">Lists</NextLink>
          <NextLink href="/peak">Peaks</NextLink>
        </HStack>
      </Flex>
    </Box>
  );
}
