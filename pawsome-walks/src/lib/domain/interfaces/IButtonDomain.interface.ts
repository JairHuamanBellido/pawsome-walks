import type { ButtonVariants } from "../../core/constants";
import type { INavlinksDomain } from "./INavLinkDomain.interface";

export interface IButtonDomain {
  readonly label: string;
  readonly variant: ButtonVariants;
  readonly link: INavlinksDomain;
}
