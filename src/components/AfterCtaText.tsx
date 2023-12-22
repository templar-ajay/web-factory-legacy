import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Paragraph from "./Paragraph";

type componentsType = ({}: any) => JSXMapSerializer;

const components: componentsType = ({ color }) => {
  return {
    paragraph: ({ children }) => (
      <Paragraph className="text-sm text-black-500 mb-10" color={color}>
        {children}
      </Paragraph>
    ),
  };
};

const AfterCtaText = (props: any) => {
  return (
    <div>
      <div className="after-cta-div text-center mx-[1rem]">
        <PrismicRichText
          {...props}
          components={components({ color: props.color })}
        />
      </div>
    </div>
  );
};

export default AfterCtaText;
