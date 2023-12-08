import type { ISEODomain } from "./ISEODomain.interface";

export interface IPageDomain {
  readonly slug: string;
  readonly title: string;
  readonly seo: ISEODomain;
}
