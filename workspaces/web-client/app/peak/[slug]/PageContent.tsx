"use client";

import { FeatureCollection, LineString } from "geojson";
import { Suspense, lazy, useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import metersToFeet from "@lib/metersToFeet";
import { Peak } from "@lib/types";

const Map = lazy(() => import("./Map"));

interface Props {
  peakData: Peak | undefined;
  peakGeojson: FeatureCollection<LineString> | undefined;
}

export default function PageContent({ peakData, peakGeojson }: Props) {
  const [showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    setShowMap(true);
  }, []);

  if (!peakData) {
    return <Text>{`Oops! We couldn't find that peak.`}</Text>;
  }

  const {
    adminArea1,
    adminArea2,
    countryCode,
    elevation,
    latitude,
    longitude,
    name,
  } = peakData;

  return (
    <Box>
      <Box m="16px">
        <Heading as="h1" size="lg" mb="8px">
          {name}
        </Heading>
        <Text>
          {adminArea2}, {adminArea1}, {countryCode}
        </Text>
        <Text>
          ({latitude},{longitude})
        </Text>
        <Text>{`${elevation}m, ${metersToFeet(elevation)}ft`}</Text>
      </Box>
      {showMap && (
        <Suspense>
          <Map peak={peakData} peakGeojson={peakGeojson} />
        </Suspense>
      )}
    </Box>
  );
}
