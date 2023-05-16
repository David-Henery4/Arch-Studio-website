import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const PageLabel = () => {
  const location = useLocation();
  //
  return (
    <div className="col-start-1 col-end-2 relative grid place-items-center w-full h-full">
      <div className="hidden justify-center items-center gap-12 absolute top-0 flex-col mdTab:flex">
        <div className="h-[188px] w-[1px] bg-lightGrey"></div>
        <p className="text-bodyText leading-bodyText tracking-[18px] font-medium text-lightGrey uppercase [writing-mode:vertical-lr] [text-orientation:mixed]">
          {location?.pathname === "/"
            ? "Home"
            : location?.pathname === "/about"
            ? "About Us"
            : location?.pathname.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default PageLabel;
