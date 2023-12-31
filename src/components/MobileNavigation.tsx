"use client";

import { useState } from "react";
import { Burger } from "./SVG";
import Navigation from "@/slices/Navigation";
import { PrismicNextLink } from "@prismicio/next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

type MobileNavigationProps = {
  context: any;
  hamburger_icon_color: any;
  slices: any;
  cta_link: any;
  navigation_items_color: any;
  secondary_color: any;
  cta_message: any;
};

const MobileNavigation = ({
  context,
  hamburger_icon_color,
  slices,
  cta_link,
  navigation_items_color,
  secondary_color,
  cta_message,
}: any) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  async function handleToggle() {
    if (navOpen) {
      setIsLeaving(true);
      setTimeout(() => {
        setIsLeaving(false);
        setNavOpen(false);
      }, 300);
    } else setNavOpen(!navOpen);
  }
  return (
    <div className="relative">
      <div
        className="!z-50 relative pointer-events-auto"
        onClick={handleToggle}
      >
        <Burger color={hamburger_icon_color || "#ffffff"} />
      </div>
      {navOpen && (
        <div
          className={clsx(
            isLeaving && "slide-right",
            "slide-left navigation fixed backdrop-blur-[5px] w-full h-full top-[0] left-0 duration-300 ease-in-out"
          )}
        >
          <div className="flex flex-col w-full h-full justify-center gap-4 items-center">
            {slices[0] && (
              <div className="block w-full">
                <Navigation
                  context={{
                    orientation: "mobile",
                    navigation_items_color: navigation_items_color,
                  }}
                  index={0}
                  slices={slices}
                  slice={slices[0]}
                />
              </div>
            )}
            <div className="cta-mobile">
              <PrismicNextLink field={cta_link}>
                <div className="block arrow-box text-lg">
                  <div
                    style={{
                      color:
                        navigation_items_color || secondary_color || "#fff",
                    }}
                    className="arrow-button block text-2xl border-solid border-[1px] rounded-full px-12 py-5"
                  >
                    {cta_message}
                    <FontAwesomeIcon
                      className="arrow-icon big ml-3 w-3 inline-block hover:scale-150"
                      icon={faArrowRight}
                    />
                  </div>
                </div>
              </PrismicNextLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
