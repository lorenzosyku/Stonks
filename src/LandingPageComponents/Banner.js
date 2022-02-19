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
    <section id="about" className="min-h-screen bg-pack-train">
      
      <div className="">
        <h1 className="text-white">Test your ability to trade and uderstand the market</h1>
      </div>

      <div className="flex ">
        <div className="max-w-2xl mx-auto text-white">
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
            <form className="w-[320px] h-[400px] flex flex-col max-w-2xl mx-auto bg-shade-grayblue rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
              <label className="block mb-5 px-5">
                <span className="text-white">name</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="text"
                />
              </label>
              <label className="block mb-5 px-5">
                <span className="text-white">email</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="email"
                />
              </label>
              <label className="block mb-5 px-5">
                <span className="text-white">password</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="password"
                />
              </label>
              <label className="block mb-5 px-5">
                <span className="text-white">confirm password</span>
                <input
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                  type="password"
                />
              </label>
              <button className="text-white p-1 border-2 ">Sign Up</button>
            </form>
          </div>
        </div>
        {/*<div ref={container}></div>*/}
      </div>
    </section>
  );
}

export default Banner;
