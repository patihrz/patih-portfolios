"use client";

import React, { useState } from "react";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Meteors } from "./components/ui/meteors";
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";

export default function Home({ products }) {
  const getCurrentYear = () => new Date().getFullYear();
  const [showNavbar, setShowNavbar] = useState(false);

  const footerLinks = [
    {
      name: "GitHub",
      link: "https://github.com/patihrz",
      icon: <SiGithub aria-label="Follow us on GitHub" title="GitHub" />,
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/patih-ramadika-19b763217",
      icon: <SiLinkedin aria-label="Follow us on LinkedIn" title="LinkedIn" />,
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Instagram",
      link: "https://instagram.com/patihramadika",
      icon: <SiInstagram aria-label="Follow us on Instagram" title="Instagram" />,
      hover: " text-xl text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Gmail",
      link: "mailto:patihramadika@gmail.com",
      icon: <SiGmail aria-label="Mail us" title="Gmail" />,
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    }
  ];

  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  return (
    <section>
      {/* Navbar */}
      <header className="bg-black border-b border-gray-500 top-0 right-0 left-0 z-50 fixed backdrop-blur-md">
        <div className="mx-auto sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0">
              <a className="flex items-center no-underline hover:no-underline font-bold text-xl" href="/">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-pink-500 to-purple-500">
                  P A T I H R A M A D I K A
                </span>
              </a>
            </div>
            <div className={`absolute border border-zinc-600 border-t-0 h-12 top-0 right-0 flex items-center justify-around md:justify-center md:gap-8 px-10 w-full bg-zinc-950/90 backdrop-blur-sm ${
              showNavbar ? "translate-y-16 z-10 opacity-100" : "translate-y-0 -z-10 opacity-0 lg:opacity-100"
            } transition-all md:transition-none ease-in-out lg:relative lg:border-none lg:h-min lg:translate-y-0 lg:z-0 lg:px-10 lg:w-min lg:bg-transparent lg:backdrop-blur-0 lg:gap-0 lg:flex lg:justify-center lg:space-x-10 xl:space-x-14`}>
              <a href="/" className="text-base font-medium text-gray-300 hover:text-white">Home</a>
              <a href="/portfolios" className="text-base font-medium text-gray-300 hover:text-white">Portfolios</a>
            </div>
            <div className="flex items-center justify-end space-x-5">
              <button onClick={handleShowNavbar} type="button" className="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200">
                {!showNavbar ? (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                  </svg>
                )}
              </button>
              <div className="group relative">
                <a href="https://github.com/patihrz" target="_blank" rel="noreferrer" aria-label="GitHub repository">
                  <button className='text-gray-300'>
                    <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 hover:scale-100 duration-200 hover:stroke-white">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </button>
                </a>
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-white bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroParallax products={products} />

      {/* Feature Text Section */}
      <div className="flex items-center justify-center flex-col py-8 bg-white sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl xl:leading-tight">
            Fullstack Developer & IT Support
          </h1>
        </div>
        <div className="text-center">
        <p className="mb-6 text-base font-normal leading-7 text-gray-600 lg:max-w-2xl xl:pr-0">
            I am a passionate Fullstack Developer and IT Support, focused on building intuitive and scalable web experiences using React, Node.js, PHP, and more. I graduated from <strong>Universitas Gunadarma</strong> with a degree in <strong>Manajemen Informatika</strong>. This portfolio showcases my technical expertise and dedication to impactful digital solutions.
        </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-800 bg-black">
        <div className="mx-auto max-w-screen-xl pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="text-center">
            <div className="flex h-10 items-center justify-center text-white rounded-lg font-extrabold text-2xl">
              P A T I H R A M A D I K A
            </div>
            <p className="mt-4 text-gray-200 dark:text-gray-400 lg:text-lg">
              Crafted with ❤️ — {getCurrentYear()} All rights reserved
            </p>
            <div className="mt-6 flex justify-center gap-4">
              {footerLinks.map((footerLink) => (
                <li key={footerLink.link}>
                  <a
                    href={footerLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLink.hover}
                    aria-label={`footer link of ${footerLink.link}`}
                  >
                    {footerLink.icon}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
