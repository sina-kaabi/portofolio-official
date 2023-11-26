import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import HomeComponent from "@/components/HomeComponent";

export const metadata = {
  title: "Portfolio || Home",
  description: "Sina Kaabi - Full Stack Developer Portfolio",
};
export default function HomePage() {
  return (
    <MasterLayout>
      <HomeComponent />
    </MasterLayout>
  );
}
