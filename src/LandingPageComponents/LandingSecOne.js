import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function LandingSecOne() {
  const container = useRef(null);
  const pie = useRef(null);
  const bars = useRef(null); 

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./working.json"),
    });
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
    <section className="min-h-screen bg-shade-lightblue flex items-center">
      <div className="md:flex flex-col justify-center items-center py-12 space-y-5">
        <div className="flex justify-between px-12">
          <div className="hidden md:flex w-1/4">
            <div className=""></div>
            <div ref={container}></div>
          </div>
          <div className="md:w-1/2 flex items-center md:px-5 border">
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quidem non harum consectetur sed voluptates dolore pariatur eaque
              repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi
              rem nulla culpa
            </p>
          </div>
        </div>
        <div className="flex justify-between px-12">
          <div className="md:w-1/2 flex items-center md:px-5 border">
            <div className=""></div>
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quidem non harum consectetur sed voluptates dolore pariatur eaque
              repudiandae. Tadklslsllssssm aut ratione vel excepturi rem nulla culpa
            </p>
          </div>
          <div className="hidden md:flex w-1/4">
            <div className=""></div>
            <div ref={pie}></div>
          </div>
        </div>
        <div className="flex justify-between px-12">
          <div className="hidden md:flex w-1/4">
            <div className=""></div>
            <div ref={bars}></div>
          </div>
          <div className="md:w-1/2 flex items-center md:px-5 border">
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
