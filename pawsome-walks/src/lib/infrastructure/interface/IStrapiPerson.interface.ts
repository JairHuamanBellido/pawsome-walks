import type { IStrapiImage } from "./IStrapiImage.interface";

export interface IStrapiPerson {
  readonly fullname: string;
  readonly image: IStrapiImage;
}
