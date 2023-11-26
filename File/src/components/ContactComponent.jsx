"use client";
import React, { useRef } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaSlack,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { toast, Toaster } from "react-hot-toast";
const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_ljx76ce", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <section className="contact__component flex min-h-screen items-center justify-center">
        <div>
          {/* Heading Text */}
          <div className="container mx-auto pt-[50px] md:pt-[80px]">
            <Fade>
              <div className="heading__text relative flex justify-center">
                <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                  Contact <span className="text-[#17B978]">Us</span>
                </h2>
                <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[60px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
                  Connection
                </h2>
              </div>
            </Fade>
          </div>
          {/* ========= Contact Info Main Container ========= */}
          <div className="contact__info container mx-auto mt-16 mb-32 px-5 md:mt-24 md:mb-20 md:px-14">
            <div className="grid grid-cols-12 gap-5 md:gap-10">
              <div className="col-span-12 lg:col-span-5">
                {/* Location Section */}
                <Fade>
                  <div>
                    <div className="mb-10">
                      <h2 className='relative mb-5 mt-2 inline text-2xl font-semibold after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-[#17B878] after:content-[""] '>
                        Get in touch
                      </h2>
                      <p className="mt-8 text-base">
                        Feel free to reach out for inquiries or collaboration
                        opportunities. <br /> I can be contacted at either
                        email.
                      </p>
                    </div>
                    <div>
                      <div className="flex  items-center gap-4">
                        <div className="icon rounded-full bg-[#373D4D] p-3 sm:p-4">
                          <FaMapMarkedAlt className="text-[30px] text-[#17B878]" />
                        </div>
                        <div className="text">
                          <p className="text-sm sm:text-base">
                            Upper Richmond Road, <br /> SW15, London, United
                            Kingdom
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex  items-center gap-4">
                        <div className="icon rounded-full bg-[#373D4D] p-3 sm:p-4">
                          <MdEmail className="text-[30px] text-[#17B878]" />
                        </div>
                        <div className="text">
                          <p className="text-sm sm:text-base">
                            kaabisina@gmail.com
                          </p>
                          <p className="text-sm sm:text-base">
                            sina.kaabi@ordertiger.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex  items-center gap-4">
                        <div className="icon rounded-full bg-[#373D4D] p-3 sm:p-4">
                          <FaPhoneAlt className="text-[30px] text-[#17B878]" />
                        </div>
                        <div className="text">
                          <p className="text-sm sm:text-base">+447713736705</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="flex  items-center gap-2">
                        <a
                          href="#"
                          className="rounded-full bg-[#373D4D] p-3 transition-all duration-200 ease-linear hover:bg-[#1877f2]"
                        >
                          <FaFacebookF className="text-[20px]" />
                        </a>
                        <a
                          href="#"
                          className="rounded-full bg-[#373D4D] p-3 transition-all duration-200 ease-linear hover:bg-[#1da1f2]"
                        >
                          <BsTwitter className="text-[20px]" />
                        </a>
                        <a
                          href="#"
                          className="rounded-full bg-[#373D4D] p-3 transition-all duration-200 ease-linear hover:bg-[#0077b5]"
                        >
                          <FaLinkedinIn className="text-[20px]" />
                        </a>
                        <a
                          href="#"
                          className="rounded-full bg-[#373D4D] p-3 transition-all duration-200 ease-linear hover:bg-[#333]"
                        >
                          <BsGithub className="text-[20px]" />
                        </a>
                        <a
                          href="#"
                          className="rounded-full bg-[#373D4D] p-3 transition-all duration-200 ease-linear hover:bg-[#541554]"
                        >
                          <FaSlack className="text-[20px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="lg-10 col-span-12 mt-5 lg:col-span-7 lg:mt-0">
                <Fade>
                  <div className="justify-center md:flex">
                    <div className="w-full rounded-lg bg-[#373D4D] px-6 py-6 sm:px-8 md:px-10 lg:mx-5">
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-2">
                          <label
                            htmlFor="name"
                            className="mb-2 block text-base"
                          >
                            Name :
                          </label>
                          <input
                            id="name"
                            name="user_name"
                            type="text"
                            placeholder="Enter Your Name ..."
                            required
                            className="h-10 w-full rounded-md border border-[#ddd] bg-transparent px-4 text-base focus:border-[#17B978] focus:outline-none"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="email"
                            className="mb-2 block text-base"
                          >
                            Email :
                          </label>
                          <input
                            id="email"
                            name="user_email"
                            type="email"
                            placeholder="Enter Your Email ..."
                            required
                            className="h-10 w-full rounded-md border border-[#ddd] bg-transparent px-4 text-base focus:border-[#17B978] focus:outline-none"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="subject"
                            className="mb-2 block text-base"
                          >
                            Subject :
                          </label>
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Enter Your Subject ..."
                            required
                            className="h-10 w-full rounded-md border border-[#ddd] bg-transparent px-4 text-base focus:border-[#17B978] focus:outline-none"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="massage"
                            className="mb-2 block text-base"
                          >
                            Message :
                          </label>
                          <textarea
                            name="message"
                            id="massage"
                            cols="1"
                            rows="5"
                            placeholder="Enter Your Message ..."
                            required
                            className=" w-full rounded-md border border-[#ddd] bg-transparent py-2 px-4 text-base focus:border-[#17B978] focus:outline-none"
                          ></textarea>
                        </div>
                        <div className=" pt-2">
                          <button
                            className="my__btn text-sm font-bold uppercase"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
