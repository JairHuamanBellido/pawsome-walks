import type { IStrapiImage } from "../../infrastructure/interface/IStrapiImage.interface";
import type { IImageDomain } from "../interfaces/IImageDomain.interface";

export class ImageMapper {
  static toDomain(image: IStrapiImage): IImageDomain {
    return {
      altText: image.altText,
      url: image.image.url,
    };
  }
}
