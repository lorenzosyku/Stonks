import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeztnetLogo from "./LandingPageComponents/TeztnetLogo";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
} from "../src/firebase";

function SignupPage() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          emailRef,
          nameRef,
          passwordRef
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
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
              ref={nameRef}
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="text"
              placeholder="Name"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              ref={emailRef}
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              ref={passwordRef}
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="password"
              placeholder="Password"
            />
          </label>
          <label className="block mb-5 px-5">
            <input
              ref={confirmPasswordRef}
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
              onClick={register}
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
