import { StrapiNavigationRepository } from "../../infrastructure/repository/StrapiNavigationRepository";
import type { INavigationDomain } from "../interfaces/INavigationDomain.interface";
import { NavigationMapper } from "../mapper/NavigationMapper";

export class NavigationService {
  public static async find(
    locale: string
  ): Promise<INavigationDomain | undefined> {
    const res = await StrapiNavigationRepository.find(locale);

    if (!res.nav_links && !res.logo) {
      return undefined;
    }

    return NavigationMapper.toDomain(res);
  }
}
