import { FeatureCollection } from "geojson";
import {
  type Map as MapType,
  Map,
  Marker,
  NavigationControl,
  Popup,
  LngLatBounds,
} from "mapbox-gl";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/react";

interface MapboxMapProps extends BoxProps {
  mapRef: MutableRefObject<MapType | null>;
  markers?: Marker[];
  geojsonFeatureCollections?: FeatureCollection[];
  initialCenter?: {
    lat: number;
    lng: number;
  };
  initialPitch?: number;
  initialZoom?: number;
  onMapChange?: (map: MapType) => void;
}

export default function MapboxMap({
  mapRef,
  markers,
  geojsonFeatureCollections,
  initialCenter = markers?.[0]?.getLngLat(),
  initialPitch = 0,
  initialZoom = 6.5,
  onMapChange,
  ...boxProps
}: MapboxMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const previousMarkers = useRef<Marker[] | undefined>(markers);
  const [showSatelliteStyle, setShowSatelliteStyle] = useState<boolean>(false);

  useEffect(() => {
    if (mapRef.current) {
      return;
    }

    if (mapContainerRef.current) {
      const map = new Map({
        container: mapContainerRef.current,
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
        style: showSatelliteStyle
          ? "mapbox://styles/mapbox/satellite-streets-v12"
          : "mapbox://styles/mapbox/outdoors-v12",
        center: initialCenter,
        zoom: initialZoom,
        pitch: initialPitch,
      });
      map.on("load", () => {
        console.log("Map load, resizing");
        map.resize();
      });
      map.on("style.load", () => {
        if (geojsonFeatureCollections) {
          geojsonFeatureCollections.forEach((feature) => {
            map.addSource("route", { type: "geojson", data: feature });
            map.addLayer({
              id: "route",
              type: "line",
              source: "route",
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#EE4B2B",
                "line-width": 2,
              },
            });
            map.on("mouseover", "route", (e) => {
              console.log("geometry:");
              console.log(e.features?.[0]?.geometry);
              new Popup()
                .setLngLat(e.lngLat)
                .setHTML("<div>Test</div>")
                .addTo(map);
            });
          });
        }
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
        map.setTerrain({ source: "mapbox-dem", exaggeration: 1 });
      });
      map.addControl(new NavigationControl());
      map.on("moveend", () => onMapChange?.(map));
      mapRef.current = map;
    }
  }, [
    geojsonFeatureCollections,
    initialCenter,
    initialPitch,
    initialZoom,
    mapRef,
    onMapChange,
    showSatelliteStyle,
  ]);

  useEffect(() => {
    const map = mapRef.current;
    if (map && map.isStyleLoaded()) {
      if (showSatelliteStyle) {
        map.setStyle("mapbox://styles/mapbox/satellite-streets-v12");
      } else {
        map.setStyle("mapbox://styles/mapbox/outdoors-v12");
      }
    }
  }, [mapRef, showSatelliteStyle]);

  useEffect(() => {
    const map = mapRef.current;
    if (map && markers) {
      if (markers.length > 1) {
        const bounds = new LngLatBounds();
        previousMarkers.current?.forEach((marker) => marker.remove());
        previousMarkers.current = markers;
        markers.forEach((marker) => {
          bounds.extend(marker.getLngLat());
          const markerElement = marker.getElement();
          // markerElement.addEventListener("click", (e) => {
          //   e.stopPropagation();
          //   map.flyTo({ center: marker.getLngLat(), zoom: 14, pitch: 70 });
          // });
          markerElement.addEventListener("mouseenter", () => {
            marker.togglePopup();
          });
          markerElement.addEventListener("mouseleave", () => {
            marker.togglePopup();
          });
          marker.addTo(map);
        });
        map.fitBounds(bounds, { padding: 50 });
      } else {
        map.flyTo({
          center: markers[0].getLngLat(),
          zoom: 14,
          bearing: 0,
          pitch: 0,
        });
      }
    }
  }, [mapRef, markers]);

  return (
    <Box ref={mapContainerRef} {...boxProps}>
      <Box
        position="absolute"
        top="8px"
        left="8px"
        zIndex={1}
        backgroundColor="white"
        p="8px"
        borderRadius="8px"
        borderWidth="1px"
        borderStart="solid"
        borderColor="gray.400"
      >
        <Checkbox
          isChecked={showSatelliteStyle}
          onChange={(e) => {
            setShowSatelliteStyle(e.target.checked);
          }}
        >
          Satellite view
        </Checkbox>
      </Box>
    </Box>
  );
}
