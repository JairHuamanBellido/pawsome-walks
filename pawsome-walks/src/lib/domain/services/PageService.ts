import { StrapiPageRepository } from "../../infrastructure/repository/StrapiPageRepository";
import type { IPageDomain } from "../interfaces/IPageDomain.interface";
import { PageMapper } from "../mapper/PageMapper";

export class PageService {
  static async findBySlug({
    locale,
    slug,
  }: {
    slug: string;
    locale: string;
  }): Promise<IPageDomain | undefined> {
    const strapiPage = await StrapiPageRepository.findBySlug({ locale, slug });

    if (!strapiPage.data.length) {
      return undefined;
    }
    return PageMapper.toDomain(strapiPage);
  }
}
