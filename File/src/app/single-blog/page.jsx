import React from "react";
import SingleBlogComponents from "@/components/SingleBlogComponents";
import MasterLayout from "@/masterLayout/MasterLayout";

const page = () => {
  return (
    <MasterLayout>
      <SingleBlogComponents />
    </MasterLayout>
  );
};

export default page;
