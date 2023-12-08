import type { IStrapiButton } from "../../infrastructure/interface/IStrapiButton.interface";
import type { IStrapiPage } from "../../infrastructure/interface/IStrapiPage.interface";
import type { IButtonDomain } from "../interfaces/IButtonDomain.interface";
import type { IPageDomain } from "../interfaces/IPageDomain.interface";

export class PageMapper {
  static toDomain(strapiPage: IStrapiPage): IPageDomain {
    return {
      slug: strapiPage.slug,
      seo: strapiPage.seo,
      title: strapiPage.title,
      sections: strapiPage.sections.map((section) => {
        const buttonParse: IButtonDomain | null = section.hero_banner.button
          ? {
              label: section.hero_banner.button.button.label,
              variant: section.hero_banner.button.button.variant,
              link: {
                href: section.hero_banner.button.button.nav_link.slug,
                label: section.hero_banner.button.button.nav_link.label,
              },
            }
          : null;
        return {
          id: "HeroBanner",
          heading: section.hero_banner.heading,
          subheading: section.hero_banner.subheading,
          image: {
            altText: section.hero_banner.image.altText,
            url: section.hero_banner.image.image.url,
          },
          button: buttonParse,
        };
      }),
    };
  }
}
