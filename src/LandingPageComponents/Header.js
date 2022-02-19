import { Link } from "react-scroll";

function Header() {
  return (
    <header className="bg-white flex items-center" id="home">
      <nav className="flex p-5 justify-center items-center" id="nav-wrap">
        <div className="">
          <h2 className="font-poppins text-xl text-black italic font-semibold">
            TeztNet-V1
          </h2>
        </div>
        <ul
          id="nav"
          className="hidden md:flex space-x-5 items-center text-black font-semibold"
        >
          <li>
            <Link to="about" smooth={true} className="cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} className="cursor-pointer">
              Services
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} className="cursor-pointer">
              Contact Us
            </Link>
          </li>
          <button className="cursor-pointer font-semibold mx-5 bg-shade-darkgrayblue px-3 py-1 text-white">Login</button>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
