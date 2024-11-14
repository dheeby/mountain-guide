import fs from "fs";
import { PeakList } from "@lib/types";

export default async function getList(
  name: string
): Promise<PeakList | undefined> {
  const peakListPath = `app/data/list/${name}.json`;
  try {
    const fileContents = fs.readFileSync(peakListPath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Peak list file not found: ${peakListPath}`);
  }
  return undefined;
}
