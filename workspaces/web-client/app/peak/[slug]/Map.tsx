import { FeatureCollection, LineString } from "geojson";
import { Marker, type Map as MapType, Popup } from "mapbox-gl";
import { useMemo, useRef } from "react";
import { Peak } from "@lib/types";
import MapboxMap from "@components/MapboxMap";

interface Props {
  peak: Peak;
  peakGeojson: FeatureCollection<LineString> | undefined;
}

export default function Map({ peak, peakGeojson }: Props) {
  const mapRef = useRef<MapType | null>(null);

  const markers = useMemo(
    () => [
      new Marker()
        .setLngLat({
          lat: peak.latitude || 0,
          lng: peak.longitude || 0,
        })
        .setPopup(new Popup({ closeButton: false }).setText(peak.name || "")),
    ],
    [peak.latitude, peak.longitude, peak.name]
  );

  return (
    <MapboxMap
      mapRef={mapRef}
      markers={markers}
      geojsonFeatureCollections={peakGeojson ? [peakGeojson] : undefined}
      initialCenter={{ lat: peak.latitude, lng: peak.longitude }}
      initialPitch={70}
      initialZoom={14}
      height="100vh"
    />
  );
}
