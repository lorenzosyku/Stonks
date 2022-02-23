import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function LandingSecOne() {
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
    <section className="min-h-screen bg-shade-darkgrayblue  ">
      <div className="py-10 flex flex-col justify-center items-center md:grid grid-rows-3 grid-flow-col gap-4">
        <div className="md:row-span-3 ">
          <div ref={container}></div>
        </div>
        <div className="w-1/2 md:col-span-2 px-5 border mx-5">
          <div className=""></div>
          <p className="text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem non harum consectetur sed voluptates dolore pariatur eaque
            repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi rem
            nulla culpa?
          </p>
        </div>
        <div className="w-1/2 md:col-span-2 px-5 border mx-5">
          <div className=""></div>
          <p className="text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem non harum consectetur sed voluptates dolore pariatur eaque
            repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi rem
            nulla culpa?
          </p>
        </div>

        <div className="w-1/2 md:col-span-2 px-5 border mx-5">
          <div className=""></div>
          <p className="text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quidem non harum consectetur sed voluptates dolore pariatur eaque
            repudiandae. Tenetur, qui quos aperiam aut ratione vel excepturi rem
            nulla culpa?
          </p>
        </div>
      </div>
    </section>
  );
}

export default LandingSecOne;
