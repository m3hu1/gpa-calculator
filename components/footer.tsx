import React from "react";
import Link from "next/link";
import Typist from "@/node_modules/react-typist-component";

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <Typist>
        <p>
          {"Developed by "}
          <Link
            href="https://github.com/m3hu1"
            className="text-green-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typist.Delay ms={500} />
            Mehul
          </Link>
        </p>
      </Typist>
    </footer>
  );
};

export default Footer;
