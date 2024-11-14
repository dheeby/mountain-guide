export interface NextPageProps<SlugType = string> {
  params: { slug: SlugType };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface Peak {
  geonameId: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  countryCode: string;
  adminArea1: string;
  adminArea2: string;
}

export interface PeakList {
  id: number;
  name: string;
  alternateName?: string;
  description: string;
  countryCode: string;
  adminCode1?: string;
  peaks: Array<Peak>;
}
