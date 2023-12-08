import type { IStrapiBase } from "../interface/IStrapiBase.interface";
import type { IStrapiPage } from "../interface/IStrapiPage.interface";

export class StrapiPageRepository {
  public static async findBySlug({
    locale,
    slug,
  }: {
    locale: string;
    slug: string;
  }): Promise<IStrapiPage> {
    const params = new URLSearchParams({
      [`filters[slug][$eq]`]: slug,
      populate: "*",
      locale,
    });

    return await fetch(`${import.meta.env.API}/pages?` + params).then((res) =>
      res.json()
    );
  }
}
