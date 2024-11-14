import NextLink from "next/link";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import getList from "@lib/getList";
import metersToFeet from "@lib/metersToFeet";
import { NextPageProps } from "@lib/types";

import MapOpener from "./MapOpener";

export default async function List({ params }: NextPageProps) {
  const listName = params.slug;
  const listData = await getList(listName);

  if (!listData) {
    return (
      <Text>{`Oops! We couldn't find a list with that name (${listName}).`}</Text>
    );
  }

  return (
    <VStack p="24px 48px" gap="16px">
      <Heading as="h1" size="lg">
        {listData.name}
      </Heading>
      <Text as="p">{listData.description}</Text>
      <MapOpener peakList={listData} />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Name</Th>
              <Th>Elevation</Th>
              <Th>(Lng,Lat)</Th>
              <Th>Location</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listData.peaks.map((peak, index) => (
              <Tr key={peak.geonameId}>
                <Td>{index + 1}</Td>
                <Td>
                  <NextLink href={`/peak/${peak.geonameId}`}>
                    {peak.name}
                  </NextLink>
                </Td>
                <Td>{`${peak.elevation}m, ${metersToFeet(
                  peak.elevation
                )}ft`}</Td>
                <Td>{`(${peak.latitude},${peak.longitude})`}</Td>
                <Td>{`${peak.adminArea2}, ${peak.adminArea1}, ${peak.countryCode}`}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
}
