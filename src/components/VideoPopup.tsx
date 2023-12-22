"use client";
import React, { ReactElement } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";

type CtaProps = {
  className?: string;
  style?: object;
  image: ReactElement;
  iframe: ReactElement;
};

export default function VideoPopup({
  className,
  style,
  image,
  iframe,
}: CtaProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className={clsx(className, "cursor-pointer")}
        style={style}
        onClick={onOpen}
      >
        {image}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent className="mb-[25vh] sm:mb-0 h-[380px] bg-transparent">
          {(onClose) => (
            <>
              <ModalBody style={{ paddingRight: 0, paddingLeft: 0 }}>
                {iframe}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
