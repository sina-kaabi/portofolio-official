"use client";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt, FaSearch, FaTags, FaUserAlt } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const SingleBlogComponents = () => {
  return (
    <>
      <section className="single__blog__component flex min-h-screen items-center justify-center">
        {/* ========= Single Blog Main Container ========= */}
        <div className="container mx-auto mb-32 px-5 pt-16 md:mb-20 md:px-14 md:pt-24">
          <div className="grid grid-cols-12 gap-5 md:gap-10">
            <div className="col-span-12 lg:col-span-8">
              <div className=" rounded-lg bg-[#373D4D] pb-8">
                <div className="img__file relative flex justify-center">
                  <LazyLoad>
                    <img
                      className="w-full rounded-lg object-cover"
                      src="/Assets/Images/blog/blog_7.png"
                      alt="NetGrid - Next JS Portfolio Template"
                    />
                  </LazyLoad>

                  <div className="date absolute bottom-[20px] right-[10px]">
                    <span className="rounded-lg bg-[#17b878] px-3 py-3">
                      January 15, 2022
                    </span>
                  </div>
                </div>
                <div className="text__file mx-5 mt-8 mb-6 md:mx-8">
                  <div className="">
                    <div className=" mb-3">
                      <span className="inline items-center">
                        <FaUserAlt className="inline text-[#17B878]" />

                        <span className="ml-1.5 text-sm ">Admin</span>
                      </span>

                      <span className="ml-3 inline items-center">
                        <FaRegCalendarAlt className="inline text-[#17B878]" />

                        <span className="ml-1.5 text-sm">14 February 2022</span>
                      </span>

                      <span className="ml-3 inline items-center">
                        <FaTags className="inline text-[#17B878]" />

                        <span className="ml-1.5 text-sm">
                          NodeJS, NPM, React, Express
                        </span>
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    12 Common JavaScript Functions You Need href Know.
                  </h2>
                </div>
                <div className="des mx-5 md:mx-8">
                  <p>
                    Fowler covers a range of topics including design,
                    refactoring, NoSQL, DSL, continuous delivery, microservices
                    and agile development. With posts ranging from every few
                    days href once a week, he also includes a very useful
                    reference index (a cross between a blog and a wiki, or a
                    "bliki") containing well over 400 entries href date. A List
                    Apart is a multi-faceted blog that has a wealth of
                    information in several formats. You can read the traditional
                    blog posts, watch interviews with Web development experts,
                    or engage in a Q&A discussion with "Dr. Web" if you have
                    queries about the industry. Many programming bloggers have
                    started here before moving into their own space — meaning
                    you're getting top notch content from future stars in the
                    field.
                  </p>
                  <br />
                  <p>
                    Fowler covers a range of topics including design,
                    refactoring, NoSQL, DSL, continuous delivery, microservices
                    and agile development. With posts ranging from every few
                    days href once a week, he also includes a very useful
                    reference index (a cross between a blog and a wiki, or a
                    "bliki") containing well over 400 entries href date.
                  </p>
                  <br />
                  <p>
                    An upgrade href an integral part of your business software
                    can pose great challenges if you’re a global company with
                    thousands of employees. Like many organizations faced with a
                    software upgrade project, Georg Fischer Piping Systems was
                    looking for a solution href help them with training and
                    onboarding href drive the success of the project and href
                    ensure user adoption among their employees. With more than
                    1000 employees depending on the CRM system across seven
                    different language versions, this was no small feat. Gerog
                    Fischer Piping Systems decided href upgrade their CRM system
                    by moving globally from Microsoft Dynamics 2013 href
                    Microsoft Dynamics 365. By onboarding 34 countries with 7
                    languages, GF Piping Systems understood the need for a tool
                    for CRM-embedded training content and user-friendly
                    knowledge transfer.
                  </p>
                  <br />
                  <h4 className="text-2xl font-semibold">What You'll Get</h4>
                  <br />
                  <p>
                    Georg Fischer is a global industrial engineering company
                    with more than 14,000 employees and three divisions. GF
                    Piping Systems itself is located in 34 countries with more
                    than 6,800 employees and generated sales of CHF 1.802
                    billion in 2019. With more than 60,000 products, GF Piping
                    Systems can offer complete system solutions. With Microsoft
                    supplying updates href their software every six months, this
                    results in a constant need for updates href the training
                    material. At Georg Fischer, Anja Schmid, Junior CRM
                    Community Manager, and her team use ClickLearn href produce
                    their training material, which includes videos and user
                    documentation. All their training is based on the content
                    they produce using ClickLearn. Without the Replay function
                    and the multilanguage support, Anja and her team would never
                    be able href stay on top of their training material, let
                    alone have time href create the seven language versions href
                    support the different languages of their CRM.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-8 lg:col-span-4 lg:mt-0 lg:pl-2">
              {/* Search Intro */}
              <div className="search__box mb-8">
                <div className="relative w-full text-gray-600">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="h-12 w-full rounded-full bg-white px-5 pr-10 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 p-[16px]"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Recent Blog */}
              <div className="recent__blog">
                <div>
                  <h2 className='relative mb-5 mt-2 inline text-[22px] font-medium after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-[#17B878] after:content-[""] '>
                    Recent Post
                  </h2>
                </div>
                <div className="mt-8">
                  <div className="items mb-5 flex justify-between gap-4">
                    <div className="img__file w-1/3 rounded-md">
                      <LazyLoad>
                        <img
                          className="h-full w-full rounded-md "
                          src="/Assets/Images/blog/blog_1.png"
                          alt="NetGrid - Next JS Portfolio Template"
                        />
                      </LazyLoad>
                    </div>
                    <div className="text__file w-2/3">
                      <Link
                        href={"/single-blog"}
                        className="inline-block text-base font-medium transition-all duration-200 ease-linear hover:text-[#17B878]"
                      >
                        Before diving into how they operate with their powers.
                      </Link>
                      <span className="mt-1 inline-block text-[12px] text-slate-300">
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className="items mb-5 flex justify-between gap-4">
                    <div className="img__file w-1/3 rounded-md">
                      <LazyLoad>
                        <img
                          className="h-full w-full rounded-md "
                          src="/Assets/Images/blog/blog_2.png"
                          alt="NetGrid - Next JS Portfolio Template"
                        />
                      </LazyLoad>
                    </div>
                    <div className="text__file w-2/3">
                      <Link
                        href={"/single-blog"}
                        className="inline-block text-base font-medium transition-all duration-200 ease-linear hover:text-[#17B878]"
                      >
                        Unlike other JS frameworks, React doesn’t href do you
                        want?
                      </Link>
                      <span className="mt-1 inline-block text-[12px] text-slate-300">
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className="items mb-5 flex justify-between gap-4">
                    <div className="img__file w-1/3 rounded-md">
                      <LazyLoad>
                        <img
                          className="h-full w-full rounded-md "
                          src="/Assets/Images/blog/blog_3.png"
                          alt="NetGrid - Next JS Portfolio Template"
                        />
                      </LazyLoad>
                    </div>
                    <div className="text__file w-2/3">
                      <Link
                        href={"/single-blog"}
                        className="inline-block text-base font-medium transition-all duration-200 ease-linear hover:text-[#17B878]"
                      >
                        It is designed href be as beginner-friendly as possible
                        and uses.
                      </Link>
                      <span className="mt-1 inline-block text-[12px] text-slate-300">
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className="items mb-5 flex justify-between gap-4">
                    <div className="img__file w-1/3 rounded-md">
                      <LazyLoad>
                        <img
                          className="h-full w-full rounded-md "
                          src="/Assets/Images/blog/blog_6.png"
                          alt="NetGrid - Next JS Portfolio Template"
                        />
                      </LazyLoad>
                    </div>
                    <div className="text__file w-2/3">
                      <Link
                        href={"/single-blog"}
                        className="inline-block text-base font-medium transition-all duration-200 ease-linear hover:text-[#17B878]"
                      >
                        JavaScript is a high-level programming language that.
                      </Link>
                      <span className="mt-1 inline-block text-[12px] text-slate-300">
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                  <div className="items mb-5 flex justify-between gap-4">
                    <div className="img__file w-1/3 rounded-md">
                      <LazyLoad>
                        <img
                          className="h-full w-full rounded-md "
                          src="/Assets/Images/blog/blog_5.png"
                          alt="NetGrid - Next JS Portfolio Template"
                        />
                      </LazyLoad>
                    </div>
                    <div className="text__file w-2/3">
                      <Link
                        href={"/single-blog"}
                        className="inline-block text-base font-medium transition-all duration-200 ease-linear hover:text-[#17B878]"
                      >
                        Python is one of the most chosen programming.
                      </Link>
                      <span className="mt-1 inline-block text-[12px] text-slate-300">
                        January 15, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Section */}
              <div className="tag pt-5">
                <h2 className='relative mb-5 mt-2 inline text-[22px] font-medium after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-[#17B878] after:content-[""] '>
                  Tags
                </h2>
                <div className="mt-8">
                  <button className="my__btn mb-3 ml-2 px-4 py-1.5">
                    NodeJS
                  </button>
                  <button className="my__btn mb-3 ml-2 px-4 py-1.5 ">
                    JavaScript
                  </button>
                  <button className="my__btn mb-3 ml-2 px-4 py-1.5 ">
                    ReactJS
                  </button>
                  <button className="my__btn mb-3 ml-2 px-4 py-1.5">PHP</button>
                  <button className="my__btn mb-3 ml-2 px-4 py-1.5 ">
                    Server
                  </button>
                  <button className="my__btn mb-3 ml-2 px-4 py-1.5">
                    Development
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogComponents;
