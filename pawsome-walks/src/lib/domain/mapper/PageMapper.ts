import type { IStrapiBase } from "../../infrastructure/interface/IStrapiBase.interface";
import type { IStrapiPage } from "../../infrastructure/interface/IStrapiPage.interface";
import type { IPageDomain } from "../interfaces/IPageDomain.interface";

export class PageMapper {
  static toDomain(strapiPage: IStrapiBase<IStrapiPage>): IPageDomain {
    return {
      slug: strapiPage.data[0].attributes.slug,
      seo: strapiPage.data[0].attributes.seo,
      title: strapiPage.data[0].attributes.title,
    };
  }
}
