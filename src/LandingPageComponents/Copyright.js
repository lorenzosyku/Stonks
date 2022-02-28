import React from "react";
import { Link } from "react-scroll";

function Copyright() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 py-10">
      <div className="flex items-center justify-center md:justify-start p-2">
        <Link
          to="home"
          smooth={true}
          className="cursor-pointer font-poppins text-xl text-shade-lightblue italic font-semibold"
        >
          TeztNet<span className="text-amber-400">-V1</span>
        </Link>
      </div>
      <div className="flex items-center justify-center py-2 font-poppins font-semibold">
        <span>All Rights Reserved, © 2022 Teztnet-V1, Inc.</span>
      </div>

      <div className="flex items-center justify-center md:justify-end p-2">
        <a href="https://github.com/lorenzosyku/Stonks">
          <img
            className="h-6 w-6 cursor-pointer"
            src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
            alt="github repository"
          />
        </a>
      </div>
    </div>
  );
}

export default Copyright;
