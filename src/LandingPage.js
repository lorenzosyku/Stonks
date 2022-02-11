import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function LandingPage() {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./components/working.json"),
    });
  }, []);


  return (
    <div className="">
      <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex justify-between p-5 shadow-md">
        <p>
          <h1>TRADING_GUXHI</h1>
        </p>
        <div className="flex space-x-10">
          <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">Features</button>
          <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">Products</button>
          <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">Contact us</button>
          <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">Login</button>
        </div>
      </div>
      <div className="flex max-w-4xl mx-auto justify-center mt-25">
        <div ref={container}></div>
        <div className="">
          <h1>Looking for a real chance at learning how to trade through your own trial and error, but you can not afford to loose money? Do you want to test different <span>trading strategies</span> without worrying about the <span>potential mistakes</span>  you might do along the way?</h1>
          <p>Well if that is the case sir, you just found the right place. <span>TRADING_GUXHI</span> is a platform designed for inexpirienced traders that would like to learn how to trade responsively</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
