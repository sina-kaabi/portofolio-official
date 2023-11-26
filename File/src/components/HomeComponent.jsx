"use client";

import React from "react";
import {
  FaFacebookF,
  FaGitAlt,
  FaLinkedinIn,
  FaSlack,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Typed from "react-typed";

export const metadata = {
  title: "NetGrid || Home",
  description: "NetGrid - Next JS Portfolio Template",
};

export default function HomeComponent() {
  const typeText = ["SOFTWARE DEVELOPER", "WEB DESIGNER", "WEB DEVELOPER"];
  return (
    <section className="home__component flex min-h-screen items-center justify-center py-[60px]  md:py-0">
      {/* ========= Home Main Container ========= */}
      <div className="container mx-auhref px-5 md:px-10 lg:px-8">
        <div className="home__content ">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 mb-20 md:mt-16 md:mb-0">
              <div className="flex items-center justify-center">
                <div className="text__file">
                  <div>
                    <div className="mb-6 flex justify-center md:hidden">
                      <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full ring-4 ring-[#373D4D] ring-offset-0">
                        <div>
                          <Image
                            className="object-cover "
                            src={"/Assets/Images/profile.png"}
                            alt="NetGrid - Next JS Portfolio Template"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center text-center">
                      <div>
                        <h2 className="text-[26px] font-bold sm:text-[32px] md:text-[50px] lg:text-[60px] ">
                          I am
                          <span className="ml-2 text-[#17b978]">
                            Sina Kaabi
                          </span>
                        </h2>
                        <h3 className="h-[60px] text-[20px] font-bold sm:text-[26px] md:text-[30px] lg:text-[40px]">
                          <Typed
                            strings={typeText}
                            typeSpeed={120}
                            backSpeed={100}
                            cursorChar=""
                            loop
                          />
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center md:mt-4 md:px-[20px] lg:px-[50px]">
                    <div>
                      <p className="text-center text-sm	leading-[25px] sm:text-base sm:leading-[35px] ">
                        Full Stack Web Developer and Web Application
                        specializing in front-end and back-end development.
                        Experienced with all stages of the development cycle for
                        dynamic websites. Well versed in numerous programming
                        languages JavaScript ES6 Nodejs, structured language
                        HTML5 CSS3, Libraries REACT-JS With MongoDB Database.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="icon__file mt-10 flex justify-center">
                      <div className="flex gap-2">
                        <Link
                          href={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#1877f2]"
                        >
                          <FaFacebookF className="text-[20px]" />
                        </Link>
                        <Link
                          href={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#1da1f2]"
                        >
                          <FaTwitter className="text-[20px]" />
                        </Link>
                        <Link
                          href={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#0077b5]"
                        >
                          <FaLinkedinIn className="text-[20px]" />
                        </Link>
                        <Link
                          href={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#333]"
                        >
                          <FaGitAlt className="text-[20px]" />
                        </Link>
                        <Link
                          href={"/"}
                          className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#541554]"
                        >
                          <FaSlack className="text-[20px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="download__resume mt-8 flex justify-center">
                    <div>
                      <a
                        href="/Assets/pdf/SinaKaabiResume-RevisedOriginal (2).pdf"
                        download
                      >
                        <button className="my__btn   text-base">
                          Download CV
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
