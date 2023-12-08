import type { IButtonDomain } from "./IButtonDomain.interface";
import type { IImageDomain } from "./IImageDomain.interface";

export interface IHeroBannerDomain {
  readonly id: string;
  readonly heading: string;
  readonly subheading: string;
  readonly image: IImageDomain;
  readonly button: IButtonDomain | null;
}
