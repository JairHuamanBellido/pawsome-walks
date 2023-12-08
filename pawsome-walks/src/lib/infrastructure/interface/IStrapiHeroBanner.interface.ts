import type { IStrapiButton } from "./IStrapiButton.interface";
import type { IStrapiImage } from "./IStrapiImage.interface";

export interface IStrapiHeroBanner {
  readonly __component: "components.hero-banner";
  readonly hero_banner: {
    readonly heading: string;
    readonly subheading: string;
    readonly image: IStrapiImage;
    readonly button: null | {
      button: IStrapiButton;
    };
  };
}
