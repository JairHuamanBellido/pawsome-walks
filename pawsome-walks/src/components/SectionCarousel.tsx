import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { IImageDomain } from "../lib/domain/interfaces/IImageDomain.interface";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { cn } from "../lib/utils";
import Heading3 from "./Heading3.astro";
interface Props {
  readonly data: {
    readonly image: IImageDomain;
    readonly headline: string;
    readonly content: BlocksContent;
  }[];
}

export default function SectionCarousel({ data }: Props) {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={80} className="mySwiper ">
      {data.map((data, i) => (
        <SwiperSlide className="p-4 max-w-[50%] min-h-[400px] ">
          <img className={cn("w-full h-[200px]")} src={data.image.url} alt={data.image.altText} />
          {<Heading3 />}
          <BlocksRenderer content={data.content} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
