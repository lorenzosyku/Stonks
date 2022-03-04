import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function LandingSecOne() {
  const pie = useRef(null);
  const bars = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: pie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./report-animated-icon.json"),
    });
    lottie.loadAnimation({
      container: bars.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./investment-chart.json"),
    });
  }, []);

  return (
    <section
      className="min-h-screen bg-shade-lightblue flex items-center"
      id="services"
    >
      <div className="max-w-5xl mx-auto md:flex flex-col space-y-5 justify-center">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl text-slate-200 font-poppins font-semibold px-3">
            Analytics and data menagement
          </h1>
        </div>
        <div className="flex justify-between items-center px-12">
          <div className="md:w-1/2 flex items-center md:px-5">
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quidem non harum consectetur sed voluptates dolore pariatur eaque
              repudiandae. Tadklazeslesm aut ratione vel excepturi rem nulla
              culpa
            </p>
          </div>
          <div className="md:w-1/4">
            <div ref={pie}></div>
          </div>
        </div>
        <div className="flex justify-between items-center px-12">
          <div className="md:w-1/4">
            <div ref={bars}></div>
          </div>
          <div className="md:w-1/2 flex items-center md:px-5">
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quidem non harum consectetur sed voluptates dolore pariatur eaque
              repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi
              rem nulla culpa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSecOne;
