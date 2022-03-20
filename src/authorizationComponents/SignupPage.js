import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeztnetLogo from "../LandingPageComponents/TeztnetLogo";
import {
  createUserWithEmailAndPassword,
  auth,
} from "../firebase";

function SignupPage() {
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
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('password not matching')
    }
  };
  return (
    <div className="min-h-screen ">
      <TeztnetLogo />
      <div className="flex justify-center items-center">
        <form className="md:flex flex-col shadow-lg rounded-md py-5 w-1/4">
          <div className="bg-shade-lightblue h-[60px]">
            <h2 className="p-3 text-xl font-semibold text-gray-100">
              Register
            </h2>
          </div>
          <label className="block mb-5 px-5 mt-5">
            <input
              onChange={(e) => setName(e.target.value)}
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="text"
              placeholder="Name"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="password"
              placeholder="Password"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
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
              className="bg-shade-lightblue text-gray-100 font-semibold p-2 shadow-lg rounded-md cursor-pointer"
              onClick={signUp}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
