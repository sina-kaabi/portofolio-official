import React from "react";
import ContactComponent from "@/components/ContactComponent";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "NetGrid || Contact",
  description: "NetGrid - Next JS Portfolio Template",
};
const ContactPage = () => {
  return (
    <MasterLayout>
      <ContactComponent />
    </MasterLayout>
  );
};

export default ContactPage;
