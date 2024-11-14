import fs from "fs";
import { FeatureCollection, LineString } from "geojson";

export default async function getPeakGeojson(
  id: number
): Promise<FeatureCollection<LineString> | undefined> {
  const geojsonPath = `app/data/geojson/${id}.geojson`;
  try {
    const fileContents = fs.readFileSync(geojsonPath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Geojson file not found: ${geojsonPath}`);
  }
  return undefined;
}
