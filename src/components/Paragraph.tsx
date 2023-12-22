import { getSettings } from "@/app/utils";
type ParagraphProps = {
  children: React.ReactNode;
  className: string;
  color: string;
};

export default async function Paragraph({
  children,
  className,
  color,
}: ParagraphProps) {
  const settings = await getSettings();
  const { secondary_color } = settings.data;
  return (
    <p
      style={{ color: color || secondary_color || "#303030" }}
      className={className}
    >
      {children}
    </p>
  );
}
