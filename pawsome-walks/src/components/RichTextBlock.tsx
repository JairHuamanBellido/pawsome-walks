import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
interface Props {
  content: BlocksContent;
}
export default function RichTextBlock({ content }: Props) {
  return <BlocksRenderer content={content} />;
}
