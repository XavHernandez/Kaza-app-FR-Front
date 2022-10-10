import React, { useState, useRef, useEffect } from "react";
import styles from "./Accordion.module.scss";

type AccordionDetails = {
  title: string;
  children: JSX.Element;
};

const Accordion: React.FunctionComponent<AccordionDetails> = (props: AccordionDetails) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number | undefined>(0);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateToggle();
  }, [isOpen]);

  function toggleAccordion(): void {
    setIsOpen(!isOpen);
  }

  function animateToggle(): void {
    const size = content.current?.scrollHeight;
    const children = content.current?.childNodes;

    if (children?.length) {
      const list = [...children] as HTMLElement[];
      list.forEach((child) => {
        child.style.opacity = "0";
      });
      setTimeout(() => {
        list.forEach((child) => {
          child.style.opacity = "1";
        });
      }, 350);
    }

    isOpen ? setHeight(size) : setHeight(0);
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_header} onClick={toggleAccordion}>
        <h2 className={styles.accordion_title}>{props.title}</h2>
        <svg
          className={`${styles.accordion_icon} ${isOpen ? `${styles.rotated}` : ""}`}
          viewBox="0 0 25 15"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" />
        </svg>
      </div>
      <div className={styles.accordion_content} ref={content} style={{ height: `${height}px` }}>
        {isOpen && props.children}
      </div>
    </div>
  );
};

export default Accordion;
