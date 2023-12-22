"use client";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Bootstrap-minimum.css";
import styles from "./Bootstrap.module.css";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

type componentsType = ({}: any) => JSXMapSerializer;

const components: componentsType = ({ color }) => {
  // we are not using them because the carousel breaks when we use them.
  // nothing to do this the createClient in Heading component.
  // yeah it's strange

  // heading4: ({ children }) => {
  //   return (
  //     <Heading as="h4" size="sm" className="font-body mb-0">
  //       {children}
  //     </Heading>
  //   );
  // },
  // paragraph: ({ children }) => (
  //   <Paragraph className="text-lg md:text-xl text-black-500 mt-0 mb-10">
  //     {children}
  //   </Paragraph>
  // ),
  return {
    heading4: ({ children }) => {
      return (
        <h4
          className="mb-0 text-xl sm:text-2xl md:text-3xl "
          style={{ color: color }}
        >
          {children}
        </h4>
      );
    },
    paragraph: ({ children }) => {
      return (
        <p className="text-md md:text-lg" style={{ color: color }}>
          {children}
        </p>
      );
    },
  };
};

export default function BootstrapCarousel({ items, color }: any) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map(({ testimonial, name }: any, i: number) => (
        <Carousel.Item key={i} className={styles.itemP} interval={4000}>
          {/* <img src={item.imageUrl} alt="slides" /> */}
          <Carousel.Caption className={styles.caption}>
            <div className="mb-8">
              <PrismicRichText
                field={testimonial}
                components={components({ color: color })}
              />
            </div>
            <PrismicRichText
              field={name}
              components={components({ color: color })}
            />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
