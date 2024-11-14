import getPeak from "@lib/getPeak";
import getPeakGeojson from "@lib/getPeakGeojson";
import type { NextPageProps } from "@lib/types";
import PageContent from "./PageContent";

export default async function Peak({ params }: NextPageProps) {
  const peakId = parseInt(params.slug);
  const peakData = getPeak(peakId);
  const peakGeojson = await getPeakGeojson(peakId);

  return <PageContent peakData={peakData} peakGeojson={peakGeojson} />;
}
