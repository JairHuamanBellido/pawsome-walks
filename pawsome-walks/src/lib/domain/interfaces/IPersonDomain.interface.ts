import type { IImageDomain } from "./IImageDomain.interface";

export interface IPersonDomain {
  readonly fullname: string;
  readonly image: IImageDomain;
}
