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
    <section id="about" className="min-h-screen ">
      <img
        className="min-h-screen w-full md:h-[770px]"
        src="./img/bg-chart.png"
        alt=""
      />

      {/*<div className="flex ">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-poppins font-semibold">
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
            <span className="text-2xl font-semibold italic">TestNet-V1</span> is
            a platform designed for inexpirienced traders that would like to
            learn how to trade responsively
          </p>
        </div>
        <div className="flex items-center w-[700px] min-h-screen">
          <div className="z-10 grid justify-items-center">
            <form className="w-[320px] h-[400px] flex flex-col max-w-2xl mx-auto bg-blue-100">
              <label className="block mb-5 px-5">
                <span className="text-gray-700">name</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="text"
                />
              </label>
              <label className="block mb-5 px-5">
                <span className="text-gray-700">email</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="email"
                />
              </label>
              <label className="block mb-5 px-5">
                <span className="text-gray-700">password</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="password"
                />
              </label>
              <label className="block mb-5 px-5">
                <span className="text-gray-700">confirm password</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="password"
                />
              </label>
            </form>
          </div>

          <img className="absolute min-h-screen object-contain" src="./img/bg-chart.png" alt="" />
        </div>
        {/*<div ref={container}></div>
      </div>*/}
    </section>
  );
}

export default Banner;
