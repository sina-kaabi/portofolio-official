"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Fade from "react-reveal/Fade";
import workingExperience from "../script/WorkingExperience.js";
import Experience from "../script/Experience";
import Education from "../script/Education";
import Skill from "../script/skill.js";
const AboutComponent = () => {
  return (
    <>
      <section className="about__component flex min-h-screen items-center justify-center">
        <div>
          {/* ========= About Info Main Container ========= */}
          <div>
            {/* Heading Text */}
            <div className="container mx-auto pt-[50px] md:pt-[80px]">
              <Fade>
                <div className="heading__text relative flex justify-center">
                  <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                    About <span className="text-[#17B978]">Me</span>
                  </h2>
                  <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
                    Resume
                  </h2>
                </div>
              </Fade>
            </div>
            {/* Personal Info */}
            <div className="container mx-auto mt-10 px-5 md:mt-24 md:px-14">
              <div className="grid grid-cols-12 gap-2 md:gap-10">
                {/* Left Side */}
                <div className="col-span-12 xl:col-span-6">
                  <div className=" block gap-8 md:flex">
                    <Fade>
                      <div className='img__file relative z-20 hidden before:absolute before:left-[16px] before:top-[-16px] before:z-[-9] before:h-full before:w-full before:border-[5px] before:border-[#17B978] before:content-[""] md:block'>
                        <img
                          className="h-48 w-full rounded-md object-cover md:h-full md:w-[250px]"
                          src="/Assets/Images/profile.png"
                          alt="NetGrid - Next JS Portfolio Template"
                        />
                      </div>

                      <div className="mb-6 flex justify-center md:hidden">
                        <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full ring-4 ring-[#373D4D] ring-offset-0">
                          <img
                            className="object-cover "
                            src="/Assets/Images/profile.png"
                            alt="NetGrid - Next JS Portfolio Template"
                          />
                        </div>
                      </div>
                    </Fade>
                    <div className="text__file pt-5 md:pl-4 md:pt-0">
                      <Fade>
                        <h3 className="border-b-2 pb-1 text-2xl font-bold">
                          PERSONAL INFO
                        </h3>
                      </Fade>

                      <div>
                        <Fade>
                          <ul className="mt-2">
                            <li className="mb-2 text-sm text-slate-400">
                              Name:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                Sina Kaabi
                              </span>
                            </li>
                            <li className="mb-2 text-sm text-slate-400">
                              Age:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                30
                              </span>
                            </li>
                            <li className="mb-2 text-sm text-slate-400">
                              Phone:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                +447713736705
                              </span>
                            </li>
                            <li className="mb-2 text-sm text-slate-400">
                              Skype:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                sina.vlc
                              </span>
                            </li>
                            <li className="mb-2 text-sm text-slate-400">
                              Email:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                Kaabisina@gmail.com
                              </span>
                            </li>
                            <li className="mb-2 text-sm text-slate-400">
                              Address:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                London, United Kingdom
                              </span>
                            </li>
                            <li className="mb-2 text-sm text-slate-400">
                              Languages:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                English, Spanish, Swedish
                              </span>
                            </li>
                            <li className="mb-2 text-sm text-slate-400">
                              Nationality:
                              <span className="pl-2 text-base font-medium text-slate-200">
                                Sweden
                              </span>
                            </li>
                          </ul>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Side */}
                <div className="col-span-12 mt-3 md:mt-0 xl:col-span-6">
                  <div className="skill__file relative xl:ml-5">
                    <Fade>
                      <div className="grid grid-cols-10 gap-6">
                        {Experience.map((item, index) => (
                          <div
                            key={index}
                            className="col-span-6 rounded-lg border border-[#ddd] px-2 py-2 md:col-span-4"
                          >
                            <div>
                              <div className="flex justify-center">
                                <h2 className="text-[40px] font-bold">
                                  {item.number}
                                  <span className=" font-medium text-[#17B978]">
                                    +
                                  </span>
                                </h2>
                              </div>
                              <div className="mt-1 flex justify-center">
                                <p className="text-center text-[12px] font-semibold uppercase sm:text-[16px]">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========= Skill Info Main Container ========= */}
          <div>
            {/* Heading Text */}
            <div className="container mx-auto pt-[60px] md:pt-[80px]">
              <Fade>
                <div className="heading__text relative flex justify-center">
                  <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                    <span className="text-[#17B978]">My</span> Skill
                  </h2>
                  <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
                    Experience
                  </h2>
                </div>
              </Fade>
            </div>

            {/* Skill Info */}
            <div className="mt-18 container mx-auto px-5 md:mt-24 md:px-14 ">
              <div className="skill__items mt-16">
                <div className="grid grid-cols-12 gap-5 md:gap-10">
                  {Skill.map((item, index) => (
                    <Fade key={index}>
                      <div className="col-span-4 mb-6 flex justify-center sm:mb-10 md:col-span-3 lg:col-span-2">
                        <div style={{ width: 120, height: 120 }}>
                          <CircularProgressbar
                            value={item.number}
                            text={item.number + "%"}
                            strokeWidth="10"
                            styles={buildStyles({
                              pathColor: "#17B978",
                              textColor: "#fff",
                              textSize: "22px",
                            })}
                          />
                          <div className="text__heading mt-3 flex justify-center">
                            <h2 className="text-[14px] font-medium sm:text-base">
                              {item.title}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========= Resume Info Main Container ========= */}
          <div>
            {/* Heading Text */}
            <div className="container mx-auto pt-[60px] md:pt-[80px] ">
              <Fade>
                <div className="heading__text relative flex justify-center">
                  <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                    Cover <span className="text-[#17B978]">Letter</span>
                  </h2>
                  <h2 className="absolute top-[0px] text-[55px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[120px]">
                    Resume
                  </h2>
                </div>
              </Fade>
            </div>
            {/* Resume Info */}
            <div className="container mx-auto mb-28 mt-8 px-5 sm:mt-16 md:mt-24 md:mb-20 md:px-14">
              <div className="resume__file mt-16">
                <div className="grid md:grid-cols-12 md:gap-10">
                  {/* Left Side Working Experience*/}
                  <div className="col-span-12 lg:col-span-6">
                    <Fade>
                      <div className="heading__text flex items-end">
                        <div>
                          <img
                            className="w-[50px]"
                            src="/Assets/Images/working.png"
                            alt="NetGrid - Next JS Portfolio Template"
                          />
                        </div>
                        <h2 className="relative ml-3 text-[20px] font-semibold md:text-[26px]">
                          Working Experience
                        </h2>
                      </div>
                    </Fade>

                    <div className="intro__file mt-8 ">
                      {workingExperience.map((item, index) => (
                        <Fade key={index}>
                          <div className="items relative mb-8">
                            <div className="items-center md:flex lg:block xl:flex">
                              <h3 className="text-[16px] font-semibold text-[#17B978]  sm:text-[20px] md:text-[25px]">
                                {item.title}
                              </h3>
                              <div className="mt-[-4px] md:mt-0 lg:mt-[-4px] xl:mt-0">
                                <span className="inline-block rounded-full bg-[#373D4D] py-0.5 px-4 text-xs text-[#fff] md:ml-2 md:inline lg:ml-0 xl:ml-2">
                                  {item.time}
                                </span>
                              </div>
                            </div>
                            <h3 className="mt-2 text-[14px] font-semibold sm:text-[18px] md:mt-0 lg:mt-[12px] xl:mt-0">
                              {item.company}
                            </h3>
                            <p className="mt-3 text-sm sm:text-base lg:mt-2 xl:mt-3">
                              {item.text}
                            </p>
                          </div>
                        </Fade>
                      ))}
                    </div>
                  </div>
                  {/* Right Side Educational Qualifications*/}
                  <div className="col-span-12 mt-3 md:mt-0 lg:col-span-6">
                    <Fade>
                      <div className="heading__text flex items-end">
                        <div>
                          <img
                            className="w-[50px]"
                            src="/Assets/Images/college-graduation.png"
                            alt="NetGrid - Next JS Portfolio Template"
                          />
                        </div>
                        <h2 className="relative ml-3 text-[20px] font-semibold md:text-[26px]">
                          Educational Qualifications
                        </h2>
                      </div>
                    </Fade>

                    <div className="intro__file mt-8 ">
                      {Education.map((item, index) => (
                        <Fade key={index}>
                          <div className="items relative mb-8">
                            <div className="items-center md:flex lg:block xl:flex">
                              <h3 className="text-[16px] font-semibold text-[#17B978]  sm:text-[20px] md:text-[25px]">
                                {item.title}
                              </h3>
                              <div className="mt-[-4px] md:mt-0 lg:mt-[-4px] xl:mt-0">
                                <span className="inline-block rounded-full bg-[#373D4D] py-0.5 px-4 text-xs text-[#fff] md:ml-2 md:inline lg:ml-0 xl:ml-2">
                                  {item.time}
                                </span>
                              </div>
                            </div>
                            <h3 className="mt-2 text-[14px] font-semibold sm:text-[18px] md:mt-0 lg:mt-[12px] xl:mt-0">
                              {item.institute}
                            </h3>
                            <p className="mt-3 text-sm sm:text-base lg:mt-2 xl:mt-3">
                              {item.text}
                            </p>
                          </div>
                        </Fade>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
