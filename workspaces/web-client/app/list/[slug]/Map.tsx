"use client";

import { Marker, type Map as MapType, Popup } from "mapbox-gl";
import { useMemo, useRef } from "react";
import MapboxMap from "@components/MapboxMap";
import { Peak } from "@lib/types";

interface Props {
  peaks: Array<Peak>;
}

export default function Map({ peaks }: Props) {
  const mapRef = useRef<MapType | null>(null);

  const markers = useMemo(
    () =>
      peaks.map((peak) =>
        new Marker()
          .setLngLat({
            lat: peak.latitude,
            lng: peak.longitude,
          })
          .setPopup(new Popup({ closeButton: false }).setText(peak.name))
      ),
    [peaks]
  );

  return (
    <MapboxMap
      mapRef={mapRef}
      markers={markers}
      height="90vh"
    />
  );
}
