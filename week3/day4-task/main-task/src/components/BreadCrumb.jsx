import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LuSlash } from "react-icons/lu";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="mt-[24px] ml-[18px] font-semibold text-[18px] bg-[#f1f1f2] p-2">
      <ul className="flex gap-1 text-xl text-[#2E4053] items-center">
        <Link to="/" className="hover:bg-[#E8DAEF] p-2 rounded-md">Home</Link>
        {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={index}>
              <LuSlash />
              {isLast ? (
                <span className="p-2">{segment}</span>
              ) : (
                <Link
                  to={path}
                  className="hover:bg-[#E8DAEF] p-2 rounded-md"
                >
                  {segment}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
