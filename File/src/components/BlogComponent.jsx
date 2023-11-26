"use client";
import React from "react";
import { Fade } from "react-reveal";
import LazyLoad from "react-lazyload";
import Blog from "../script/Blog";
import Link from "next/link";
const BlogComponent = () => {
  return (
    <>
      <section className="blog__component flex min-h-screen items-center justify-center">
        {/* ========= Blog Main Container ========= */}
        <div>
          {/* Heading Text */}
          <div className="container mx-auto pt-[50px] md:pt-[80px]">
            <Fade>
              <div className="heading__text relative flex justify-center">
                <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                  <span className="text-[#17B978]">All</span> Blogs
                </h2>
                <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
                  News
                </h2>
              </div>
            </Fade>
          </div>
          {/* Blog Info */}
          <div className="blog__info container mx-auto mt-16 mb-32 px-5 md:mt-24 md:mb-20 md:px-14">
            <Fade>
              <div className="gp-4 grid grid-cols-12 gap-5 lg:gap-10">
                {Blog.map((item, index) => (
                  <div
                    className="item col-span-12 mb-12 md:col-span-6 md:mb-8 "
                    key={index}
                  >
                    <div>
                      <div className="img__file relative rounded-lg">
                        <LazyLoad>
                          <img
                            src={item.img}
                            alt="NetGrid - Next JS Portfolio Template"
                          />
                        </LazyLoad>
                        <div className="date absolute bottom-[22px] right-[10px]">
                          <span className="rounded-lg bg-[#17b878] py-4 px-4">
                            {item.date}
                          </span>
                        </div>
                      </div>
                      <div className="text__file">
                        <h2 className="mt-5 text-[22px] font-semibold">
                          {item.title}
                        </h2>
                        <p className="mt-3">{item.des}</p>
                      </div>

                      <div>
                        <Link href="/single-blog">
                          <button className="my__btn__two">
                            <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Read More</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
            {/* Pagination */}
            <div className="pagination mt-6 flex justify-center md:mt-16">
              <nav aria-label="Page navigation">
                <ul className="inline-flex space-x-2">
                  <li>
                    <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full text-[#fff] transition-colors duration-150 hover:bg-[#373D4D]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline h-10 w-10 rounded-full border border-r-0 border-[#17b978] bg-[#17b978] text-white transition-colors duration-150">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline h-10 w-10 rounded-full text-[#fff] transition-colors duration-150 hover:bg-[#373D4D]">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline h-10 w-10 rounded-full text-[#fff] transition-colors duration-150 hover:bg-[#373D4D]">
                      3
                    </button>
                  </li>
                  <li>
                    <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full text-[#fff] transition-colors duration-150 hover:bg-[#373D4D]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;
