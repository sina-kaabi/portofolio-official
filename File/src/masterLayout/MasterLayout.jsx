"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  FaCommentAlt,
  FaEnvelope,
  FaHome,
  FaThLarge,
  FaUserAlt,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { usePathname } from "next/navigation";
const MasterLayout = (props) => {
  const router = usePathname();
  return (
    <>
      <div className="sidebar__section flex items-center justify-center">
        <div>
          <div className="hidden md:flex justify-center items-center  logo py-10 w-[80px] h-[80px] rounded-full overflow-hidden ring-offset-0 ring-2 ring-[#373D4D]">
            <Image
              className="object-cover  w-[80px] h-[80px] "
              src="/Assets/Images/profile.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <nav className=" menu__section py-1 md:py-0 md:mt-4">
            <ul>
              <li>
                <Link className={router == "/" ? "active" : "ss"} href={"/"}>
                  <FaHome className="text-[20px] md:text-[16px]" />
                </Link>
              </li>
              <li>
                <Link
                  className={router == "/about" ? "active" : ""}
                  href={"/about"}
                >
                  <FaUserAlt className="text-[20px] md:text-[16px]" />
                </Link>
              </li>
              <li>
                <Link
                  className={router == "/services" ? "active" : ""}
                  href={"/services"}
                >
                  <MdDesignServices className="text-[20px] md:text-[16px]" />
                </Link>
              </li>
              <li>
                <Link
                  className={router == "/portfolio" ? "active" : ""}
                  href={"/portfolio"}
                >
                  <FaThLarge className="text-[20px] md:text-[16px]" />
                </Link>
              </li>
              <li>
                <Link
                  className={router == "/contact" ? "active" : ""}
                  href={"/contact"}
                >
                  <FaEnvelope className="text-[20px] md:text-[16px]" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="main__body">{props.children}</div>
    </>
  );
};

export default MasterLayout;
