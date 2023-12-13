import type { IStrapiButton } from "../../infrastructure/interface/IStrapiButton.interface";
import type { IStrapiHeroBanner } from "../../infrastructure/interface/IStrapiHeroBanner.interface";
import type { IStrapiPage } from "../../infrastructure/interface/IStrapiPage.interface";
import type { IStrapiSectionRealCase } from "../../infrastructure/interface/IStrapiRealCase.interface";
import type { IButtonDomain } from "../interfaces/IButtonDomain.interface";
import type { IHeroBannerDomain } from "../interfaces/IHeroBannerDomain.interface";
import type { IPageDomain } from "../interfaces/IPageDomain.interface";
import type { ISectionRealCaseDomain } from "../interfaces/IRealCaseDomain.interface";
import { ImageMapper } from "./ImageMapper";

export class PageMapper {
  static toDomain(strapiPage: IStrapiPage): IPageDomain {
    return {
      slug: strapiPage.slug,
      seo: strapiPage.seo,
      title: strapiPage.title,
      sections: strapiPage.sections.map((section) => {
        if (section && "hero_banner" in section) {
          return this.toDomainHeroBanner(section);
        } else if (section && "section_real_case" in section) {
          return this.toDomainSectionRealCases(section);
        }
        return null;
      }),
    };
  }
  private static toDomainHeroBanner(
    section: IStrapiHeroBanner
  ): IHeroBannerDomain {
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
      image: ImageMapper.toDomain(section.hero_banner.image),
      button: buttonParse,
    };
  }

  private static toDomainSectionRealCases(
    realCases: IStrapiSectionRealCase
  ): ISectionRealCaseDomain {
    return {
      id: "SectionRealCases",
      headline: realCases.section_real_case.headline,
      real_cases: realCases.section_real_case.real_cases.map(
        (realCaseStrapi) => {
          return {
            title: realCaseStrapi.title,
            content: realCaseStrapi.content,
            dog: {
              image: ImageMapper.toDomain(realCaseStrapi.dog.image),
              name: realCaseStrapi.dog.name,
              race: realCaseStrapi.dog.race,
              years: realCaseStrapi.dog.years,
            },
            person: {
              fullname: realCaseStrapi.person.fullname,
              image: ImageMapper.toDomain(realCaseStrapi.person.image),
            },
          };
        }
      ),
    };
  }
}
