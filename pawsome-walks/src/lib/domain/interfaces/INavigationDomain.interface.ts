import type { IImageDomain } from "./IImageDomain.interface";
import type { INavlinksDomain } from "./INavLinkDomain.interface";

export interface INavigationDomain {
  readonly logo: IImageDomain;
  readonly navLinks: Array<INavlinksDomain>;
}
