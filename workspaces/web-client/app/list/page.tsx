import { Box, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default async function List() {
  return (
    <VStack p="24px 48px">
      <NextLink href="/list/washington-top-100">Washington Top 100</NextLink>
      <NextLink href="/list/new-hampshire-48">New Hampshire 48</NextLink>
    </VStack>
  );
}
