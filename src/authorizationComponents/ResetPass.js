import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import TeztnetLogo from "../LandingPageComponents/TeztnetLogo";

function ResetPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  const resetPassword = (e) => {
    e.PreventDefault()

    
  } 
  return (
    <div className="min-h-screen ">
      <TeztnetLogo />
      <div className="flex justify-center items-center">
        <form className="md:flex flex-col shadow-lg rounded-md py-5 w-1/4">
          <div className="bg-shade-lightblue h-[60px]">
            <h2 className="p-3 text-xl text-gray-100 font-semibold">
              Reset Password
            </h2>
          </div>
          <label className="block mb-5 px-5 mt-5">
            <input
              className="shadow bg-gray-200 border rounded py-2 px-3 form-input mt-1 block w-full outline-none"
              type="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </label>
          <div className="p-5 text-gray-500 text-sm">
            <p>
              Once you type in your Email here and click the "Send link" button,
              you will be sent a password reset link. Please check your{" "}
              <span className="font-bold">inbox</span> shortly.
            </p>
          </div>
          <div className="flex justify-start items-center px-5">
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => {
                navigate("/login");
              }}
            >
              Back to Login
            </span>
          </div>
          <div className="flex justify-end p-5">
            <button className="bg-shade-lightblue cursor-pointer text-gray-100 font-semibold p-2 shadow-lg rounded-md" onClick={resetPassword}>
              Send link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPass;
