import BackgroundOfSmallImages from "@/components/BackgroundOfSmallImages";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ProjectCTA from "@/components/ProjectCTA";
import { Reveal } from "@/components/Reveal";
import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type componentsType = ({}: any) => JSXMapSerializer;

type getComponentsProps = {
  h3_color: any;
  h2_color: any;
  paragraph_color: any;
};

const getComponents: componentsType = ({
  h3_color = "inherit",
  h2_color = "inherit",
  paragraph_color = "inherit",
}: getComponentsProps) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="xl"
          className="font-extrabold tracking-tight !leading-snug text-center lg:text-left mb-4"
          color={h2_color}
        >
          {children}
        </Heading>
      );
    },

    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="sm"
          className="font-body text-center mb-4"
          color={h3_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="text-center lg:text-left tracking-wider !leading-9 text-lg md:text-xl text-black-500 font-light mt-2 mb-10"
        color={paragraph_color}
      >
        {children}
      </Paragraph>
    ),
  };
};

/**
 * Props for `Project`.
 */
export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

/**
 * Component for "Project" Slices.
 */
const Project = async ({
  slice,
  //@ts-ignore
  context: { page_default_text_color },
}: ProjectProps): Promise<JSX.Element> => {
  const components = getComponents({
    h2_color: page_default_text_color,
    h3_color: page_default_text_color,
    paragraph_color: page_default_text_color,
  });

  const backgroundOfSmallImagesUID =
    //@ts-ignore
    slice.primary.background_of_small_images?.uid;

  const client = createClient();
  const backgroundOfSmallImages = backgroundOfSmallImagesUID
    ? await client.getByUID(
        "background_of_small_images",
        backgroundOfSmallImagesUID
      )
    : null;

  return (
    <>
      <div className="h-[100vh] w-[100vw] absolute">
        <div className="relative w-full h-full">
          {backgroundOfSmallImages && (
            <BackgroundOfSmallImages data={backgroundOfSmallImages.data} />
          )}
        </div>
      </div>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="relative flex-wrap lg:flex !gap-[4%] my-[80px]">
          <div className="w-full max-w-2xl mx-auto lg:w-[36%] mb-28 lg:mb-0 ">
            <Reveal delay={0} width="100%">
              <PrismicRichText
                field={slice.primary.title}
                components={components}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <PrismicRichText
                field={slice.primary.description}
                components={components}
              />
            </Reveal>
            <div className="block w-fit mx-auto lg:mx-0">
              <Reveal className="block" delay={0.5}>
                <ProjectCTA
                  style={{ color: page_default_text_color || "#fff" }}
                >
                  {slice.primary.cta_text}
                </ProjectCTA>
              </Reveal>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="lg:w-[80%] flex justify-end relative">
              <Reveal>
                <PrismicNextImage
                  className="z-10 lg:translate-x-[120px] rounded-2xl"
                  field={slice.primary.laptop_size_project_screenshot}
                />
              </Reveal>
              <PrismicNextImage
                className="absolute lg:scale-80 max-w-[10rem] sm:max-w-[15rem] lg:max-w-[20rem]  z-20 left-0 -bottom-48 mobile:-bottom-20 rounded-2xl"
                field={slice.primary.mobile_size_project_screenshot}
              />
            </div>
          </div>
        </div>
        <div className="mt-[220px] max-w-[1340px]">
          <div className="flex-column md:flex gap-[110px]">
            <div className="w-full mx-auto md:!w-[30%] flex justify-center items-center ">
              <PrismicNextImage
                className="rounded-full scale-75 md:scale-100"
                field={slice.primary.clients_picture}
              />
            </div>
            <div className="w-full md:w-[70%] relative">
              <div className="absolute left-[2%] mobile:left-[12%] md:-left-24 -top-[320px] mobile:-top-[350px] md:-top-6">
                <svg
                  className="rotate-180 opacity-30"
                  width="60"
                  height="38"
                  viewBox="0 0 60 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.4 37.9999L39.2 31.9999C41.7333 31.0666 43.5333 29.7999 44.6 28.1999C45.5333 26.5999 46 25.7999 46 25.7999C46 25.7999 45.3333 25.6666 44 25.3999C42.6667 25.2666 41.2 24.7999 39.6 23.9999C37.8667 23.1999 36.3333 21.9333 35 20.1999C33.6667 18.5999 33 16.3333 33 13.3999C33 9.66661 34.3333 6.46661 37 3.79994C39.5333 1.26661 42.6 0.0666095 46.2 0.199941C49.9333 0.333273 53.1333 1.79994 55.8 4.59994C58.3333 7.53328 59.6 11.0666 59.6 15.1999C59.6 20.3999 58 24.9999 54.8 28.9999C51.6 33.1333 47.4667 36.1333 42.4 37.9999ZM9.4 37.9999L6.2 31.9999C8.73333 31.0666 10.5333 29.7999 11.6 28.1999C12.5333 26.5999 13 25.7999 13 25.7999C13 25.7999 12.3333 25.6666 11 25.3999C9.66666 25.2666 8.2 24.7999 6.6 23.9999C4.86666 23.1999 3.33333 21.9333 2 20.1999C0.666666 18.5999 0 16.3333 0 13.3999C0 9.66661 1.33333 6.46661 4 3.79994C6.53333 1.26661 9.6 0.0666095 13.2 0.199941C16.9333 0.333273 20.1333 1.79994 22.8 4.59994C25.3333 7.53328 26.6 11.0666 26.6 15.1999C26.6 20.3999 25 24.9999 21.8 28.9999C18.6 33.1333 14.4667 36.1333 9.4 37.9999Z"
                    fill="#DFE4EE"
                  />
                </svg>
              </div>
              <Reveal>
                <PrismicRichText
                  field={slice.primary.clients_review}
                  components={{
                    paragraph: ({ children }) => (
                      <Paragraph
                        className="font-extralight text-md mobile:text-lg md:text-xl leading-9 text-center mx-auto md:ml-0 max-w-xl md:max-w-2xl md:text-left"
                        color={page_default_text_color || "inherit"}
                      >
                        {children}
                      </Paragraph>
                    ),
                  }}
                />
              </Reveal>
              <Reveal>
                <div
                  className="mt-6 mobile:mt-8 md:mt-12"
                  style={{ color: page_default_text_color || "inherit" }}
                >
                  <p className="text-xl md:text-2xl text-center md:text-left font-bold">
                    {slice.primary.clients_name}
                  </p>
                  <p className="text-sm mobile:text-md md:text-lg text-center md:text-left mt-1 font-light">
                    {slice.primary.clients_professional_title}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Bounded>
    </>
  );
};

export default Project;
