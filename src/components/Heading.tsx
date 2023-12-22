import { getSettings } from "@/app/utils";
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
  children: React.ReactNode;
  className: string;
  color: string;
};

export default async function Heading({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
  color,
}: HeadingProps) {
  const settings = await getSettings();

  const { primary_color } = settings.data;
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight font-display text-black",
        size === "xl" && "text-4xl sm:text-5xl md:text-7xl",
        size === "lg" && "text-3xl sm:text-4xl md:text-5xl",
        size === "md" && "text-2xl sm:text-3xl md:text-4xl",
        size === "sm" && "text-xl sm:text-2xl md:text-3xl",
        size === "xs" && "text-lg sm:text-xl md:text-2xl",
        size === "xxs" && "text-sm sm:text-md md:text-xl",
        className
      )}
      style={{ color: color || primary_color || "#000000" }}
    >
      {children}
    </Comp>
  );
}
