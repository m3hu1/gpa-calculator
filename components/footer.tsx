import React from "react";
import Link from "next/link";
import Typist from "@/node_modules/react-typist-component";

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <Typist>
        <p>
          Developed by{" "}
          {/* <Link
            href="https://github.com/m3hu1"
            className="text-green-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            <span className="underline">Mehul</span>
          {/* </Link> */}
        </p>
        <p>
          {" "}
          <Link
            href="https://www.github.com/m3hu1"
            className="text-green-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/git.jpeg"
              alt="Instagram Logo"
              className="inline h-5 w-5 mr-1"
            />
            GitHub
          </Link>
        </p>
        <p>
          {" "}
          <Link
            href="https://www.instagram.com/apparently.mehul"
            className="text-pink-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/i.jpeg"
              alt="Instagram Logo"
              className="inline h-5 w-5 mr-1"
            />
            Instagram
          </Link>
        </p>
      </Typist>
    </footer>
  );
};

export default Footer;
