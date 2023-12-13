import { type BlocksContent } from "@strapi/blocks-react-renderer";
import type { IDogDomain } from "./IDogDomain.inteface";
import type { IPersonDomain } from "./IPersonDomain.interface";

export interface IRealCaseDomain {
  readonly title: string;
  readonly content: BlocksContent;
  readonly dog: IDogDomain;
  readonly person: IPersonDomain;
}

export interface ISectionRealCaseDomain {
  readonly id: string;
  readonly headline: string;
  readonly real_cases: Array<IRealCaseDomain>;
}
