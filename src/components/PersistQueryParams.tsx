"use client";

import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { useSearchParams } from "next/navigation";
const PersistQueryParamsLink = ({ href, ...props }: any) => {
  const queryParams = useSearchParams().toString();
  return <Link {...props} href={href + "?" + queryParams} prefetch={true} />;
};
const PersistQueryParamsPrismicNextLink = ({ field, ...props }: any) => {
  const queryParams = useSearchParams().toString();

  return (
    <PrismicNextLink
      field={field}
      prefetch={true}
      linkResolver={(doc) => {
        if (doc.type === "page") {
          return `/${doc.uid + "?" + queryParams}`;
        }
        return null;
      }}
      {...props}
    />
  );
};

export { PersistQueryParamsLink, PersistQueryParamsPrismicNextLink };
