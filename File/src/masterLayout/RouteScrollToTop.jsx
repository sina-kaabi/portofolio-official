"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const RouteScrollToTop = () => {
  const router = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return null;
};

export default RouteScrollToTop;
