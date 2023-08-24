"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Section = ({ children, className = "bg-black text-white" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className={`h-screen flex justify-center relative snap-center items-center ${className}`}>
        {children}
    </section>
  );
};

export default Section;
