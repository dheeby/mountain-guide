import { Box } from "@chakra-ui/react";
import NextLink from "next/link";

export default async function Peak() {
  return (
    <Box p="24px 48px">
      <NextLink href="/peak/5790117">Church Mountain</NextLink>
      <NextLink href="/peak/5791763">Mount Daniel</NextLink>
      <NextLink href="/peak/5808248">Reynolds Peak</NextLink>
    </Box>
  );
}
