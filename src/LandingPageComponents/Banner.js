import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function Banner() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./working.json"),
    });
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 text-gray-600">
      <div className="flex justify-center ">
        <div className="max-w-2xl pl-5 py-5">
          <h1 className="text-3xl">
            Looking for a real chance at learning how to trade through your own
            trial and error, but you can not afford to loose money?
          </h1>
          <br />
          <h2 className="text-2xl">
            Do you want to test different{" "}
            <span className="text-emerald-700 font-semibold text-3xl">
              trading strategies
            </span>{" "}
            without worrying about the{" "}
            <span className="text-red-400 font-semibold text-3xl">
              potential mistakes
            </span>{" "}
            you might do along the way?
          </h2>

          <p className="text-2xl py-5">
            Well if that is the case sir, you just found the right place.{" "}
            <span className="text-2xl font-semibold italic">TestNet-V1</span> is a platform designed for inexpirienced
            traders that would like to learn how to trade responsively
          </p>
        </div>
        {/*<div ref={container}></div>*/}
      </div>
    </section>
  );
}

export default Banner;
