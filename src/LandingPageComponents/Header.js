function Header() {
  return (
    <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex justify-between p-5 shadow-md">
      <p>
        <h1>TestNet-V1</h1>
      </p>
      <div className="flex space-x-10">
        <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">
          Features
        </button>
        <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">
          Products
        </button>
        <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">
          Contact us
        </button>
        <button className="bg-gradient-to-r from teal-400 to bg-cyan-700 hover:scale-105 transition-transform delay-250 hover:bg-sky-400 shadow-sm rounded-lg text-white p-3 ">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
