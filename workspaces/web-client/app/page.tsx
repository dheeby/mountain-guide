"use client";

import { type Map as MapType, Marker, Popup, LngLatBounds } from "mapbox-gl";
import NextLink from "next/link";
import { useMemo, useRef, useState } from "react";
import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import {
  Link,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import { Tag } from "@chakra-ui/tag";
import MapboxMap from "@components/MapboxMap";
import washingtonScramblesData from "@data/washington_scrambles.json";

interface Peak {
  geonameId: number;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  countryCode: string;
  adminArea1: string;
  adminArea2: string;
  elevation: number;
}

interface Scramble {
  id: number;
  name: string;
  difficulty: number;
  skillLevel: number;
  distance: number;
  elevationGain: number;
  tripLengthUnit: string;
  tripLengthValue: number;
  bestMonthStart: number;
  bestMonthEnd: number;
  peaks: Peak[];
}

const ratingToColorScheme: Record<number, string> = {
  1: "green",
  2: "green",
  3: "yellow",
  4: "red",
  5: "red",
};

type Sort =
  | "default"
  | "distance-asc"
  | "distance-desc"
  | "elevation-gain-asc"
  | "elevation-gain-desc"
  | "trip-length-asc"
  | "trip-length-desc";

type RangeFilter =
  | "distance"
  | "elevation-gain"
  | "trip-length"
  | "difficulty"
  | "skill-level";

interface Range {
  min: number;
  max: number;
}

export default function Home() {
  const [mapBounds, setMapBounds] = useState<LngLatBounds | null>(null);
  const [sort, setSort] = useState<Sort>("default");
  const mapRef = useRef<MapType | null>(null);

  const minDistance = Math.min(
    ...washingtonScramblesData.map((scramble) => scramble.distance)
  );
  const maxDistance = Math.max(
    ...washingtonScramblesData.map((scramble) => scramble.distance)
  );

  const [dayTripFilter, setDayTripFilter] = useState<boolean>(false);
  const [tempDistanceFilter, setTempDistanceFilter] = useState<Range>({
    min: minDistance,
    max: maxDistance,
  });
  const [distanceFilter, setDistanceFilter] = useState<Range>({
    min: minDistance,
    max: maxDistance,
  });

  const filteredScrambles = useMemo(
    () =>
      washingtonScramblesData
        .filter(
          (scramble) => !dayTripFilter || scramble.tripLengthUnit === "hours"
        )
        .filter(
          (scramble) =>
            scramble.distance >= distanceFilter.min &&
            scramble.distance <= distanceFilter.max
        )
        .filter((scramble) => {
          if (mapBounds) {
            const sw = mapBounds.getSouthWest();
            const ne = mapBounds.getNorthEast();
            return scramble.peaks.reduce<boolean>((acc, peak) => {
              const { lat, lng } = peak.coordinates;

              // Check if longitude 180 is inside the map bounds
              const isLngInRange =
                ne.lng < sw.lng
                  ? lng >= sw.lng || lng <= ne.lng
                  : lng >= sw.lng && lng <= ne.lng;
              const isInBounds =
                acc && lat >= sw.lat && lat <= ne.lat && isLngInRange;
              if (peak.geonameId === 5815133) {
                console.log(
                  `sw: (${sw.lng},${sw.lat}), ne: (${ne.lng},${ne.lat}), point: (${lng},${lat})`
                );
              }
              return isInBounds;
            }, true);
          }
          return true;
        }),
    [dayTripFilter, distanceFilter.max, distanceFilter.min, mapBounds]
  );

  const onMapChange = (map: MapType) => {
    setMapBounds(map.getBounds());
  };

  const peaks = useMemo(
    () =>
      // TODO: This should be filteredScrambles but it throws it into a render loop. Figure out what's continuously calling setState
      washingtonScramblesData.reduce<Peak[]>((acc: Peak[], val: Scramble) => {
        acc.push(...val.peaks);
        return acc;
      }, []),
    []
  );

  const peakMarkers = useMemo(
    () =>
      peaks.map((peak) =>
        new Marker()
          .setLngLat(peak.coordinates)
          .setPopup(new Popup({ closeButton: false }).setText(peak.name))
      ),
    [peaks]
  );

  return (
    <main>
      <Flex
        direction={{ base: "column", lg: "row" }}
        height="100vh"
        overflowY="auto"
      >
        <Box
          width={{ base: "100vw", lg: "75vw" }}
          height={{ base: "50vh", lg: "100vh" }}
          position="sticky"
          top={0}
        >
          <MapboxMap
            mapRef={mapRef}
            markers={peakMarkers}
            height="100%"
            onMapChange={onMapChange}
          />
        </Box>
        <Box
          width={{ base: "100vw", lg: "25vw" }}
          height={{ base: "50vh", lg: "100vh" }}
          overflow="auto"
        >
          <Box
            px={{ base: "12px", md: "24px" }}
            pt={{ base: "12px", md: "24px" }}
          >
            <Heading as="h1" size="lg" mb="16px">
              Washington Scrambles
            </Heading>
            <Text>
              Routes from the Peggy Goldman guidebook,{" "}
              <Link
                textDecoration="underline"
                href="https://a.co/d/1QjfrJl"
                target="_blank"
              >
                Washington Scrambles: Best Nontechnical Ascents, 2nd Ed
              </Link>
              . The routes are graded on difficulty (distance, elevation gain,
              off-trail distance, and terrain ruggedness) and skill level
              (exposure, amount of loose rock, level of caution, and use of
              hands on vertical terrain).
            </Text>
          </Box>
          <Box
            position="sticky"
            top={0}
            zIndex={1}
            backgroundColor="white"
            p={{ base: "12px", md: "12px 24px" }}
            boxShadow="0px 4px 8px -4px rgba(0, 0, 0, 0.16)"
          >
            <Select
              size={{ base: "xs", md: "sm" }}
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
            >
              <option value="default">Default</option>
              <option value="distance-asc">
                Distance (Shortest to Longest)
              </option>
              <option value="distance-desc">
                Distance (Longest to Shortest)
              </option>
              <option value="elevation-gain-asc">
                Elevation gain (Least to Most)
              </option>
              <option value="elevation-gain-desc">
                Elevation gain (Least to Most)
              </option>
              <option value="trip-length-asc">
                Trip length (Shortest to Longest)
              </option>
              <option value="trip-length-desc">
                Trip length (Longest to Shortest)
              </option>
            </Select>
            <Box>
              <Text>Distance (miles)</Text>
              <RangeSlider
                defaultValue={[minDistance, maxDistance]}
                min={minDistance}
                max={maxDistance}
                step={1}
                onChange={(val) =>
                  setTempDistanceFilter({ min: val[0], max: val[1] })
                }
                onChangeEnd={(val) =>
                  setDistanceFilter({ min: val[0], max: val[1] })
                }
              >
                <RangeSliderTrack bg="red.100">
                  <RangeSliderFilledTrack bg="tomato" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0}>
                  {tempDistanceFilter.min}
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={6} index={1}>
                  {tempDistanceFilter.max}
                </RangeSliderThumb>
              </RangeSlider>
              <Checkbox
                isChecked={dayTripFilter}
                onChange={(e) => {
                  setDayTripFilter(e.target.checked);
                }}
              >
                Day trip
              </Checkbox>
            </Box>
          </Box>
          <Stack
            divider={<StackDivider />}
            spacing="4"
            px={{ base: "12px", md: "24px" }}
            pb={{ base: "12px", md: "24px" }}
            pt={{ base: "12px", md: "24px" }}
          >
            {filteredScrambles
              .sort((a, b) => {
                if (sort === "distance-asc") {
                  return a.distance - b.distance;
                } else if (sort === "distance-desc") {
                  return b.distance - a.distance;
                } else if (sort === "elevation-gain-asc") {
                  return a.elevationGain - b.elevationGain;
                } else if (sort === "elevation-gain-desc") {
                  return b.elevationGain - a.elevationGain;
                } else if (sort === "trip-length-asc") {
                  const aLengthHours =
                    a.tripLengthUnit === "days"
                      ? a.tripLengthValue * 24
                      : a.tripLengthValue;
                  const bLengthHours =
                    b.tripLengthUnit === "days"
                      ? b.tripLengthValue * 24
                      : b.tripLengthValue;
                  return aLengthHours - bLengthHours;
                } else if (sort === "trip-length-desc") {
                  const aLengthHours =
                    a.tripLengthUnit === "days"
                      ? a.tripLengthValue * 24
                      : a.tripLengthValue;
                  const bLengthHours =
                    b.tripLengthUnit === "days"
                      ? b.tripLengthValue * 24
                      : b.tripLengthValue;
                  return bLengthHours - aLengthHours;
                } else {
                  return a.id - b.id;
                }
              })
              .map((scramble) => (
                <Box key={scramble.id}>
                  <Heading
                    as="h2"
                    size="md"
                    display="inline-block"
                    cursor="pointer"
                    onClick={() => {
                      mapRef.current?.flyTo({
                        center: scramble.peaks[0].coordinates,
                        zoom: 14,
                        pitch: 80,
                      });
                    }}
                  >
                    {scramble.name}
                  </Heading>
                  <Box>
                    <Flex alignItems="center" gap="8px">
                      <Box>Difficulty</Box>
                      <Progress
                        colorScheme={ratingToColorScheme[scramble.difficulty]}
                        size="md"
                        value={(100 * scramble.difficulty) / 5}
                        width="200px"
                      />
                    </Flex>
                    <Flex alignItems="center" gap="8px">
                      <Box>Skill Level</Box>
                      <Progress
                        colorScheme={ratingToColorScheme[scramble.skillLevel]}
                        size="md"
                        value={(100 * scramble.skillLevel) / 5}
                        width="200px"
                      />
                    </Flex>
                    <Box>{`Distance: ${scramble.distance} miles`}</Box>
                    <Box>{`Elevation gain: ${scramble.elevationGain} feet`}</Box>
                    <Box>{`Trip length: ${scramble.tripLengthValue} ${scramble.tripLengthUnit}`}</Box>
                  </Box>
                  <Box>
                    {`Best months to visit: ${new Date(
                      2024,
                      scramble.bestMonthStart
                    ).toLocaleString("default", {
                      month: "long",
                    })} - ${new Date(
                      2024,
                      scramble.bestMonthEnd
                    ).toLocaleString("default", { month: "long" })}`}
                  </Box>
                  <Flex gap="4px" flexWrap="wrap">
                    {scramble.peaks.map((peak) => (
                      <Tag colorScheme="blue" key={peak.geonameId}>
                        <NextLink
                          href={`/peak/${peak.geonameId}`}
                          target="_blank"
                        >
                          {peak.name}
                        </NextLink>
                      </Tag>
                    ))}
                  </Flex>
                </Box>
              ))}
          </Stack>
        </Box>
      </Flex>
    </main>
  );
}
