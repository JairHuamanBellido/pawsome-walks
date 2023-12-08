import type { IStrapiImage } from "./IStrapiImage.interface";
import type { IStrapiNavLinks } from "./IStrapiNavLinks.interface";

export interface IStrapiNavigation {
  readonly logo: IStrapiImage;
  readonly nav_links: Array<IStrapiNavLinks>;
}
