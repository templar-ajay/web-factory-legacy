"use client";

import React, { useState, useRef } from "react";
import ReactFlagsSelect from "react-flags-select";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { getLinkOfAlternatePage } from "@/clientUtils";

type LanguageSwitcherProps = {
  placeholder?: string;
  preSelected?: string;
  countries?: string[];
  alternate_uid?: string;
};

const LanguageSwitcher = ({
  placeholder = "Change Language",
  preSelected = "",
  countries = ["US", "ES"],
  alternate_uid,
}: LanguageSwitcherProps): JSX.Element => {
  const [selected, setSelected] = useState(preSelected);

  const LinkRef = useRef(null);

  const pathname = usePathname();

  function handleSelect(code: string) {
    if (code != selected) {
      setSelected(code);
      console.log("selected", code);
      //@ts-ignore
      LinkRef?.current?.click();
    }
  }
  console.log("links", alternate_uid);

  return (
    <>
      <ReactFlagsSelect
        selected={selected}
        onSelect={handleSelect}
        countries={countries}
        customLabels={{ US: "English", ES: "Español" }}
        placeholder={placeholder}
        selectButtonClassName="border-none"
        className="border-none"
      />
      <Link
        ref={LinkRef}
        href={getLinkOfAlternatePage(pathname, alternate_uid)}
      />
    </>
  );
};

export default LanguageSwitcher;
