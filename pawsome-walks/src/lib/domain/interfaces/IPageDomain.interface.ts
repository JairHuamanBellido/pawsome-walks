import type { IHeroBannerDomain } from "./IHeroBannerDomain.interface";
import type { ISEODomain } from "./ISEODomain.interface";

export interface IPageDomain {
  readonly slug: string;
  readonly title: string;
  readonly seo: ISEODomain;
  readonly sections: Array<IHeroBannerDomain>;
}
