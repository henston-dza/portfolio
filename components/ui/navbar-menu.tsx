"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MovingBorder } from "./moving-border";
import { BackgroundGradient } from "./background-gradient";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon: Icon,
  noChildren,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon: React.ElementType;
  noChildren: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <Link href={item === "Home" ? "/" : item}>
      <div onMouseEnter={() => setActive(item)} className="relative px-3.5 py-2 rounded-full transition-all duration-300">
        <motion.p
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer hover:text-white text-white/90 flex justify-around gap-2 align-baseline relative z-10 font-semibold tracking-wide text-[14px]"
        >
          <Icon className="mt-1 hidden sm:inline opacity-80" />
          <span className="">{item}</span>
        </motion.p>

        {active === item && (
          <>
            {/* Cygnis style Liquid Glass pill */}
            <motion.div
              layoutId="liquid-pill"
              className="absolute inset-0 bg-white/10 dark:bg-white/10 backdrop-blur-[60px] rounded-full -z-10 border border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.8,
              }}
            />
          </>
        )}

        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            {active === item && !noChildren && (
              <div className="absolute top-[calc(100%_+_1.4rem)] left-1/2 transform -translate-x-1/2 pt-4">
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="relative bg-white/[0.02] backdrop-blur-[35px] rounded-2xl overflow-hidden border-t border-l border-white/20 border-b border-r border-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)]"
                >
                  {/* Glossy reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                  <motion.div layout className="w-max h-full p-4 relative z-10">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.nav
      animate={{ y: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full w-full h-full border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] flex justify-center items-center md:space-x-5 space-x-2 px-5 py-3 overflow-hidden"
    >

      {/* Specular glare reflection across the glass panel */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
      {/* Dynamic light refraction reflection line */}
      <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      <div className="flex items-center justify-center md:space-x-5 space-x-2 relative z-10 w-full">
        {children}
      </div>
    </motion.nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: any;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className=" text-sm max-w-[10rem] text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className=" text-neutral-200">
      {children}
    </Link>
  );
};
