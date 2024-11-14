import peakData from "@data/US_WA_mountains.json";
import { Peak } from "@lib/types";

export default function getPeak(geonameId: number): Peak | undefined {
  return peakData.find((peak) => peak.geonameId === geonameId);
}
