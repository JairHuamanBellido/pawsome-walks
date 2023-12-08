import type { ButtonVariants } from "../../core/constants";
import type { IStrapiNavLinks } from "./IStrapiNavLinks.interface";

export interface IStrapiButton {
  readonly label: string;
  readonly nav_link: IStrapiNavLinks;
  readonly variant: ButtonVariants;
}
