import type { IStrapiImage } from "./IStrapiImage.interface";

export interface IStrapiDog {
    readonly name:string;
    readonly race:string;
    readonly years:number;
    readonly image: IStrapiImage;
}