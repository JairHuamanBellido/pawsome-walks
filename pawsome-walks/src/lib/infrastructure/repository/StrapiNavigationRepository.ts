import { API_URL } from "../../core/constants";
import type { IStrapiNavigation } from "../interface/IStrapiNavigation.interface";

export class StrapiNavigationRepository {
  public static async find(locale: string): Promise<IStrapiNavigation> {
    const params = new URLSearchParams({ locale });

    return await fetch(`${API_URL}/navbar?` + params).then((res) => res.json());
  }
}
