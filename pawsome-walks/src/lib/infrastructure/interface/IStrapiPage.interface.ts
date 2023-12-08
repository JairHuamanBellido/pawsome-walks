import type { IStrapiHeroBanner } from "./IStrapiHeroBanner.interface";
import type { IStrapiSEO } from "./IStrapiSEO.interface";

export interface IStrapiPage {
  readonly slug: string;
  readonly title: string;
  readonly seo: IStrapiSEO;
  readonly sections: Array<IStrapiHeroBanner>;
}
