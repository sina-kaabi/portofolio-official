"use client";
import React from "react";
import {
  FaCcAmazonPay,
  FaCommentDots,
  FaGg,
  FaLaptopCode,
  FaLeaf,
  FaLifeRing,
  FaPalette,
  FaRegCopy,
} from "react-icons/fa";
import { Fade } from "react-reveal";

const ServicesComponent = () => {
  return (
    <>
      <section className="service__component flex min-h-screen items-center justify-center">
        {/* ========= Service Info Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className="container mx-auto pt-[50px] md:pt-[80px]">
            <Fade>
              <div className="heading__text relative flex justify-center">
                <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                  <span className="text-[#17B978]">My</span> Services
                </h2>
                <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
                  Action
                </h2>
              </div>
            </Fade>
          </div>
          {/* Service Info */}
          <div className="service__info container mx-auto mt-16 mb-32 px-5 md:mt-24 md:mb-20 md:px-14">
            <Fade>
              <div className="grid grid-cols-10 gap-6">
                <div className="item col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex justify-center  px-5 py-6 ">
                    <div>
                      <div className="icon__file mb-3 flex justify-center">
                        <FaLaptopCode className="text-[40px]" />
                      </div>
                      <div className="heading__text flex justify-center">
                        <h2 className="text-[25px] font-bold">Development</h2>
                      </div>
                      <div className="text mt-2 flex justify-center">
                        <p className="text-center text-[15px]">
                          As a Full Stack Developer, I provide end-to-end
                          development services, seamlessly integrating front-end
                          and back-end technologies. Specializing in dynamic and
                          responsive web applications, my expertise spans
                          various programming languages and frameworks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex justify-center  px-5 py-6 ">
                    <div>
                      <div className="icon__file mb-3 flex justify-center">
                        <FaLifeRing className="text-[40px]" />
                      </div>
                      <div className="heading__text flex justify-center">
                        <h2 className="text-[25px] font-bold">Design</h2>
                      </div>
                      <div className="text mt-2 flex justify-center">
                        <p className="text-center text-[15px]">
                          I craft visually appealing and user-centric websites.
                          My expertise lies in creating intuitive and
                          aesthetically pleasing interfaces that enhance the
                          overall user experience. I ensure that websites not
                          only look impressive but also function seamlessly
                          across devices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex justify-center  px-5 py-6 ">
                    <div>
                      <div className="icon__file mb-3 flex justify-center">
                        <FaLeaf className="text-[40px]" />
                      </div>
                      <div className="heading__text flex justify-center">
                        <h2 className="text-[25px] font-bold">UI Design</h2>
                      </div>
                      <div className="text mt-2 flex justify-center">
                        <p className="text-center text-[15px]">
                          My unique blend of creativity and technical
                          proficiency ensures that websites and applications,
                          focused on intuitive and aesthetically pleasing
                          interfaces, guarantee functional excellence and
                          provide an exceptional user interface experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex justify-center  px-5 py-6 ">
                    <div>
                      <div className="icon__file mb-3 flex justify-center">
                        <FaCcAmazonPay className="text-[40px]" />
                      </div>
                      <div className="heading__text flex justify-center">
                        <h2 className="text-[25px] font-bold">
                          Payment Integration
                        </h2>
                      </div>
                      <div className="text mt-2 flex justify-center">
                        <p className="text-center text-[15px]">
                          Specializing in e-commerce payment solutions, I excel
                          in developing seamless payment API integrations like
                          Stripe for web stores using Express.js, React, and
                          Redux. Maintaining a sharp focus on secure and
                          user-friendly payment features, I enhance the
                          functionality of e-commerce platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex justify-center  px-5 py-6 ">
                    <div>
                      <div className="icon__file mb-3 flex justify-center">
                        <FaGg className="text-[40px]" />
                      </div>
                      <div className="heading__text flex justify-center">
                        <h2 className="text-[25px] font-bold">SEO</h2>
                      </div>
                      <div className="text mt-2 flex justify-center">
                        <p className="text-center text-[15px]">
                          Specializing in SEO services, I optimize web content
                          to enhance online visibility and search engine
                          rankings. Leveraging strategic keyword placement,
                          content optimization, and technical SEO practices, I
                          ensure websites rank prominently on search engine
                          results pages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex justify-center  px-5 py-6 ">
                    <div>
                      <div className="icon__file mb-3 flex justify-center">
                        <FaCommentDots className="text-[40px]" />
                      </div>
                      <div className="heading__text flex justify-center">
                        <h2 className="text-[25px] font-bold">Support</h2>
                      </div>
                      <div className="text mt-2 flex justify-center">
                        <p className="text-center text-[15px]">
                          As a support specialist, I provide dedicated
                          assistance to ensure seamless operation and user
                          satisfaction. Leveraging strong communication skills,
                          I offer timely and effective resolutions to user
                          queries and technical issues. My focus is on
                          delivering exceptional support experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesComponent;
