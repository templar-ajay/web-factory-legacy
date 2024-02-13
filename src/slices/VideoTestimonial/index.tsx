import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { createClient } from "@/prismicio";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import VerticalVideo from "@/components/VerticalVideo";
import { Reveal } from "@/components/Reveal";

type getComponentsProps = {
  heading_h1_color?: any;
  heading_h2_color?: any;
  sub_header_color?: any;
};
type componentsType = ({}: getComponentsProps) => JSXMapSerializer;

const getComponents: componentsType = ({
  heading_h1_color,
  heading_h2_color,
  sub_header_color,
}: getComponentsProps) => {
  return {
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h1"
          className="w-full font-bold text-xs tracking-[0.2em] opacity-70 uppercase mb-4"
          color={heading_h1_color}
        >
          {children}
        </Heading>
      );
    },
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="xl"
          className="w-full font-bold tracking-[-0.02em]"
          color={heading_h2_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="w-full font-bold tracking-[-0.02em]"
          color={heading_h2_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="w-full text-sm opacity-70 largeTablet:text-base"
        color={sub_header_color}
      >
        {children}
      </Paragraph>
    ),
    strong: ({ children }: any) => <strong>{children}</strong>,
  };
};

/**
 * Props for `VideoTestimonial`.
 */
export type VideoTestimonialProps =
  SliceComponentProps<Content.VideoTestimonialSlice>;

/**
 * Component for "VideoTestimonial" Slices.
 */
const VideoTestimonial = async ({
  slice,
  context,
}: VideoTestimonialProps): Promise<JSX.Element> => {
  const { select_video_testimonials } = slice.primary;

  const client = createClient();
  const allTestimonials = await client.getByUID(
    "video_testimonials",
    //@ts-ignore
    select_video_testimonials?.uid,
    //@ts-ignore
    { lang: context?.lang }
  );

  const components = getComponents({
    heading_h1_color: "#fff",
    heading_h2_color: "#fff",
    sub_header_color: "#fff",
  });

  const { cta_text, title, video_testimonials } = allTestimonials.data;

  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-center">
        <PrismicRichText
          field={allTestimonials.data.title}
          components={components}
        />
      </div>
      <div className="my-10 mobile:my-24 w-full">
        <div className="bg-darkBG max-w-1400">
          <div className="mx-auto max-w-1400">
            <div className="max-w-1400 h-[360px] mobile:h-[636px]">
              <div className="container__scroll pb-6 overflow-x-scroll overflow-y-hidden flex gap-x-5  mobile:gap-x-8 tablet:gap-x-20 scroll-snap-type-x-mandatory scrollbar">
                {video_testimonials.map(({ ...data }, index) => (
                  <div key={index}>
                    <div className="hidden mobile:block">
                      <Reveal x={25} delay={index > 2 ? 0 : 0.3 * index}>
                        <VerticalVideo {...data} cta_text={cta_text} />
                      </Reveal>
                    </div>
                    <div className="block mobile:hidden">
                      <Reveal x={25} delay={index > 1 ? 0 : 0.3 * index}>
                        <VerticalVideo {...data} cta_text={cta_text} />
                      </Reveal>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default VideoTestimonial;
