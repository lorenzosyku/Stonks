import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

function Banner() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          addToUsers(user.user);
          console.log(user.user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("password not matching");
    }
  };

  const addToUsers = async (user) => {
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: user.email,
      id: user.uid,
      portfolio: {
        cash: 10000,
        stocks: [],
      },
      transactions: {
        stocksBought: [],
        stocksSold: [],
      },
    });
  };
  return (
    <section id="about" className="min-h-screen bg-pack-train">
      <div className="min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-white p-10 md:pr-24">
          <h1 className="text-5xl md:text-6xl max-w-xl mx-auto font-poppins font-semibold pt-5">
            Test your ability to trade and uderstand the market
          </h1>
          <br />
          <br />
          <br />
          <h2 className="text-md md:text-lg max-w-xl mx-auto font-poppins">
            Looking for a real chance at learning how to trade through your own
            trial and error, but you can not afford to loose money? Do you want
            to test different{" "}
            <span className="text-shade-lightblue text-md font-semibold italic md:text-lg">
              trading strategies
            </span>{" "}
            without worrying about the{" "}
            <span className="text-amber-400 text-md font-semibold italic md:text-lg">
              potential mistakes
            </span>{" "}
            you might do along the way?
          </h2>

          <p className="text-md md:text-lg py-5 max-w-xl mx-auto font-poppins">
            <span className="text-lg md:text-2xl font-semibold italic text-shade-lightblue">
              TeztNet<span className="text-amber-300">-V1</span>{" "}
            </span>{" "}
            is a platform designed for inexpirienced and experienced traders
            that would like to learn how to approach the markets more
            responsively
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center min-h-screen pr-5 md:w-1/3">
          <div className="z-10 grid justify-items-center">
            <form className="md:flex flex-col max-w-2xl mx-auto bg-shade-grayblue rounded-md">
              <div className="bg-shade-lightblue h-[60px]">
                <h2 className="p-3 text-xl font-semibold text-gray-100">
                  Register
                </h2>
              </div>
              <label className="block mb-5 mt-5 px-5">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
                  type="text"
                  placeholder="Name"
                />
              </label>
              <label className="block mb-5 px-5">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
                  type="email"
                  placeholder="Email"
                />
              </label>
              <label className="block mb-5 px-5">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
                  type="password"
                  placeholder="Password"
                />
              </label>
              <label className="block mb-5 px-5">
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
                  type="password"
                  placeholder="Confirm password"
                />
              </label>
              <div className="flex justify-start items-center px-5">
                <p>
                  Have an account??
                  <span
                    className="text-blue-500 px-1 cursor-pointer hover:underline"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </span>
                </p>
              </div>
              <div className="flex justify-end p-5">
                <button
                  className="bg-shade-lightblue text-gray-100 font-semibold p-2 shadow-lg rounded-md"
                  onClick={(e) => {
                    signUp(e);
                    navigate("/login/dashboard/watchlist");
                  }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
