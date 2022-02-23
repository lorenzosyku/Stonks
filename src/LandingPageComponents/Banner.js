
function Banner() {
  
  return (
    <section id="about" className="min-h-screen bg-pack-train">
      <div className="md:flex ">
        <div className="max-w-4xl mx-auto text-white p-10 pr-24">
          <h1 className="text-6xl max-w-xl mx-auto font-poppins font-semibold pt-5">
            Test your ability to trade and uderstand the market
          </h1>
          <br />
          <br />
          <br />
          <h2 className="text-lg max-w-xl mx-auto font-poppins">
            Looking for a real chance at learning how to trade through your own
            trial and error, but you can not afford to loose money? Do you want
            to test different{" "}
            <span className="text-shade-lightblue font-semibold italic text-lg">
              trading strategies
            </span>{" "}
            without worrying about the{" "}
            <span className="text-amber-400 font-semibold italic text-lg">
              potential mistakes
            </span>{" "}
            you might do along the way?
          </h2>

          <p className="text-lg py-5 max-w-xl mx-auto font-poppins">
            <span className="text-2xl font-semibold italic text-shade-lightblue">TestNet-V1 </span> is
            a platform designed for inexpirienced and experienced traders that would like to learn how to approach the markets more responsively
          </p>
        </div>
        <div className="md:flex items-center justify-center min-h-screen pr-28">
          <div className="z-10 grid justify-items-center">
            <form className="md:flex flex-col max-w-2xl mx-auto bg-shade-grayblue rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
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
       
      </div>
    </section>
  );
}

export default Banner;
