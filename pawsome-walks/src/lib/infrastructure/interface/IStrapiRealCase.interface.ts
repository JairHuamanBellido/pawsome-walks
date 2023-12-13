import { type BlocksContent } from "@strapi/blocks-react-renderer";
import type { IStrapiDog } from "./IStrapiDog.interface";
import type { IStrapiPerson } from "./IStrapiPerson.interface";

export interface IStrapiRealCase {
  readonly title: string;
  readonly content: BlocksContent;
  readonly dog: IStrapiDog;
  readonly person: IStrapiPerson;
}

export interface IStrapiSectionRealCase {
  readonly __component: "components.section-real-cases";
  readonly section_real_case: {
    readonly headline: string;
    readonly real_cases: Array<IStrapiRealCase>;
  };
}
