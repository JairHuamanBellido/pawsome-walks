import type { IStrapiNavigation } from "../../infrastructure/interface/IStrapiNavigation.interface";
import type { INavigationDomain } from "../interfaces/INavigationDomain.interface";
import { ImageMapper } from "./ImageMapper";

export class NavigationMapper {
  public static toDomain(
    strapiNavigation: IStrapiNavigation
  ): INavigationDomain {
    return {
      logo: ImageMapper.toDomain(strapiNavigation.logo),
      navLinks: strapiNavigation.nav_links.map((nav) => ({
        href: nav.slug,
        label: nav.label,
      })),
    };
  }
}
