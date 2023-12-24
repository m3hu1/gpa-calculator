"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typist from "@/node_modules/react-typist-component";

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-2 text-lg font-semibold sm:text-base custom-text-color">
        <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
        <Link className="" href="/">
          <Typist typingDelay={60} cursor={<span className="cursor">|</span>}>
            <span className="sm:hidden">
              GPA Calculator
              <Typist.Delay ms={500} />
              <Typist.Backspace count={6} />
            </span>
            <span className="hidden sm:inline">
              GPA Calculate Kar
              <Typist.Delay ms={800} />
              <Typist.Backspace count={5} />
              or
            </span>
          </Typist>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link className="underline howToUse" href="/howtouse">
          How to Use
        </Link>
        <Link href="https://github.com/m3hu1/gpa-calculator">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="GitHub Icon"
              height="32"
              src="/github.png"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">GitHub Profile</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
