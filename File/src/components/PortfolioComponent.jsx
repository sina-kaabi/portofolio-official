"use client";
import React from "react";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Portfolio from "../script/Portfolio";
const PortfolioComponent = () => {
  return (
    <>
      <section className="portfolio__component flex min-h-screen items-center justify-center">
        {/* ========= Personal Info Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className="container mx-auto pt-[50px] md:pt-[80px]">
            <Fade>
              <div className="heading__text relative flex justify-center">
                <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                  Portfolio <span className="text-[#17B978]">Item</span>
                </h2>
                <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
                  showcase
                </h2>
              </div>
            </Fade>
          </div>
          {/* Portfolio Info */}
          <div className="container mx-auto  mt-10 px-5 md:mt-24 md:px-14">
            <Tabs>
              <div className="portfolio__tabs__body flex justify-center">
                <div className="portfolio__tabs__nav">
                  <TabList>
                    <Tab>
                      <button className="my__btn ">Web Template</button>
                    </Tab>
                    <Tab>
                      <button className="my__btn ">Software</button>
                    </Tab>
                    <Tab>
                      <button className="my__btn ">Office</button>
                    </Tab>
                    <Tab>
                      <button className="my__btn ">Branding</button>
                    </Tab>
                    <Tab>
                      <button className="my__btn ">Photography</button>
                    </Tab>
                  </TabList>
                </div>
              </div>

              <div className="portfolio__tabs__body mt-14 mb-32 min-h-[640px] md:mb-20">
                {/* For Web Template */}
                <TabPanel>
                  <div className="grid grid-cols-12 gap-4 md:gap-10">
                    <Fade>
                      {Portfolio?.webTemplate.map((item, index) => (
                        <div
                          className="col-span-12 mb-5 md:col-span-6  md:mb-0"
                          key={index}
                        >
                          <a href={item.link}>
                            <div className="cursor-pointer">
                              <div className="img__file rounded-md">
                                <LazyLoad>
                                  <img
                                    src={item.img}
                                    alt="NetGrid - Next JS Portfolio Template"
                                  />
                                </LazyLoad>
                                <div className="overflow__intro">
                                  <div className="flex h-full items-center justify-center">
                                    <div className="w-full">
                                      <div className="flex justify-around px-4">
                                        <h4 className="text-base font-medium">
                                          {item.title}
                                        </h4>
                                        <p className="text-base">{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </Fade>
                  </div>
                </TabPanel>
                {/* For Software */}
                <TabPanel>
                  <div className="grid grid-cols-12 gap-4 md:gap-10">
                    <Fade>
                      {Portfolio?.software.map((item, index) => (
                        <div
                          className="col-span-12 mb-5 md:col-span-6  md:mb-0"
                          key={index}
                        >
                          <a href={item.link}>
                            <div className="cursor-pointer">
                              <div className="img__file rounded-md">
                                <LazyLoad>
                                  <img
                                    src={item.img}
                                    alt="NetGrid - Next JS Portfolio Template"
                                  />
                                </LazyLoad>

                                <div className="overflow__intro">
                                  <div className="flex h-full items-center justify-center">
                                    <div className="w-full">
                                      <div className="flex justify-around px-4">
                                        <h4 className="text-lg font-medium">
                                          {item.title}
                                        </h4>
                                        <p className="text-base">{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </Fade>
                  </div>
                </TabPanel>
                {/* For office */}
                <TabPanel>
                  <div className="grid grid-cols-12 gap-4 md:gap-10">
                    <Fade>
                      {Portfolio?.office.map((item, index) => (
                        <div
                          className="col-span-12 mb-5 md:col-span-6  md:mb-0"
                          key={index}
                        >
                          <a href={item.link}>
                            <div className="cursor-pointer">
                              <div className="img__file rounded-md">
                                <LazyLoad>
                                  <img
                                    src={item.img}
                                    alt="NetGrid - Next JS Portfolio Template"
                                  />
                                </LazyLoad>
                                <div className="overflow__intro">
                                  <div className="flex h-full items-center justify-center">
                                    <div className="w-full">
                                      <div className="flex justify-around px-4">
                                        <h4 className="text-lg font-medium">
                                          {item.title}
                                        </h4>
                                        <p className="text-base">{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </Fade>
                  </div>
                </TabPanel>
                {/* For Branding */}
                <TabPanel>
                  <div className="grid grid-cols-12 gap-4 md:gap-10">
                    <Fade>
                      {Portfolio?.branding.map((item, index) => (
                        <div
                          className="col-span-12 mb-5 md:col-span-6  md:mb-0"
                          key={index}
                        >
                          <a href={item.link}>
                            <div className="cursor-pointer">
                              <div className="img__file rounded-md">
                                <LazyLoad>
                                  <img
                                    src={item.img}
                                    alt="NetGrid - Next JS Portfolio Template"
                                  />
                                </LazyLoad>
                                <div className="overflow__intro">
                                  <div className="flex h-full items-center justify-center">
                                    <div className="w-full">
                                      <div className="flex justify-around px-4">
                                        <h4 className="text-lg font-medium">
                                          {item.title}
                                        </h4>
                                        <p className="text-base">{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </Fade>
                  </div>
                </TabPanel>
                {/* For photography */}
                <TabPanel>
                  <div className="grid grid-cols-12 gap-4 md:gap-10">
                    <Fade>
                      {Portfolio?.photography.map((item, index) => (
                        <div
                          className="col-span-12 mb-5 md:col-span-6  md:mb-0"
                          key={index}
                        >
                          <a href={item.link}>
                            <div className="cursor-pointer">
                              <div className="img__file rounded-md">
                                <LazyLoad>
                                  <img
                                    src={item.img}
                                    alt="NetGrid - Next JS Portfolio Template"
                                  />
                                </LazyLoad>
                                <div className="overflow__intro">
                                  <div className="flex h-full items-center justify-center">
                                    <div className="w-full">
                                      <div className="flex justify-around px-4">
                                        <h4 className="text-lg font-medium">
                                          {item.title}
                                        </h4>
                                        <p className="text-base">{item.tag}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </Fade>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioComponent;
