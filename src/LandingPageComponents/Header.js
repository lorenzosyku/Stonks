import { Link } from "react-scroll";

function Header() {
  return (
    <header className="bg-shade-grayblue" id="home">
      <nav
        className="flex p-5"
        id="nav-wrap"
      >
        <div className="">
          <h2 className="font-poppins text-xl text-white">TeztNet-v1</h2>
        </div>
        <ul
          id="nav"
          className="flex space-x-5 justify-end text-white "
        >
          <li>
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              className="cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
          <button className="">Login</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
