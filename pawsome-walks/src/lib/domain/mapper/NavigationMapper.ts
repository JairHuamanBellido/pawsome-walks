import type { IStrapiNavigation } from "../../infrastructure/interface/IStrapiNavigation.interface";
import type { INavigationDomain } from "../interfaces/INavigationDomain.interface";

export class NavigationMapper {
  public static toDomain(
    strapiNavigation: IStrapiNavigation
  ): INavigationDomain {
    return {
      logo: {
        altText: strapiNavigation.logo.altText,
        url: strapiNavigation.logo.image.url,
      },
      navLinks: strapiNavigation.nav_links.map((nav) => ({
        href: nav.slug,
        label: nav.label,
      })),
    };
  }
}
