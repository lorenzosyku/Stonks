import React from "react";
import { useNavigate } from "react-router-dom";
import TeztnetLogo from "./LandingPageComponents/TeztnetLogo";
import {
  signInWithEmailAndPassword,
  auth,
  useAuth,
  signOut,
} from "../src/firebase";
import { useRef } from "react";

function LoginPage() {
  const navtoSignup = useNavigate();
  const navtoresetpass = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const currentUser = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    return signOut(auth);
  };

  return (
    <div className="">
      {!currentUser && (
        <div className="min-h-screen">
          <TeztnetLogo />
          <div className="flex justify-center items-center">
            <form className="md:flex flex-col shadow-lg rounded-md py-5 w-1/4">
              <div className="bg-shade-lightblue h-[60px]">
                <h2 className="p-3 text-xl text-gray-100 font-semibold">
                  Login
                </h2>
              </div>
              <label className="block mb-5 px-5 mt-5">
                <input
                  className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
                  type="email"
                  placeholder="email"
                />
              </label>
              <label className="block mb-5 px-5">
                <input
                  className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
                  type="password"
                  placeholder="password"
                />
              </label>
              <div className="flex flex-col justify-center items-center px-5">
                <p>
                  No account??{" "}
                  <span
                    onClick={() => {
                      navtoSignup("/signup");
                    }}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Create one
                  </span>
                </p>
                <div className="">
                  <p
                    onClick={() => {
                      navtoresetpass("/resetpass");
                    }}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Reset Password
                  </p>
                </div>
              </div>
              <div className="flex justify-end p-5">
                <button
                  onClick={handleLogin}
                  className="bg-shade-lightblue font-semibold text-gray-100 p-2 shadow-lg rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="">
              <h1>current user:{currentUser?.email}</h1>
              <button
                onClick={handleLogout}
                className="bg-shade-lightblue font-semibold text-gray-100 p-2 shadow-lg rounded-md"
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
