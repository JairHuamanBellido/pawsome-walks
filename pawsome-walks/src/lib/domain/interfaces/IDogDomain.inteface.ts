import type { IImageDomain } from "./IImageDomain.interface";

export interface IDogDomain {
  readonly name: string;
  readonly race: string;
  readonly years: number;
  readonly image: IImageDomain;
}
