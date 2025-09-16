"use client";

import { ReactNode, useRef, useState } from "react";

export default function Drawer({
  title,
  className = "",
  children,
}: {
  title: { text: string; class: string };
  className?: string;
  children?: ReactNode;
}): ReactNode {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const self = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <div ref={self} className={`transition-transform duration-500 ${className}`}>
        <h2
          ref={heading}
          className={title.class}
          onClick={(e) => {
            console.log("click!");
          }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setStartY(e.clientY);
              setIsMouseDown(true);
            }
          }}
          onMouseUp={(e) => {
            if (e.target === e.currentTarget) {
              if (self.current) {
                self.current.style = "";
                self.current.classList.toggle("open");
                // TODO!: investigate bug when the event is not fired after quick click and move
                // isOpen
                //   ? (self.current.style.transform = "translateY(-480px)")
                //   : (self.current.style.transform = "translateY(0)");
              }
              setIsOpen((prev) => !prev);
              setIsMouseDown(false);
            }
          }}
          onMouseMove={(e) => {
            if (isMouseDown && self.current) {
              self.current.style.transitionDuration = "0s";
              isOpen
                ? (self.current.style.transform = `translateY(-${480 + (startY - e.clientY)}px)`) // TODO! replace 480
                : (self.current.style.transform = `translateY(-${startY - e.clientY}px)`);
            }
          }}
        >
          {title.text}
        </h2>
        {children}
      </div>
    </>
  );
}
