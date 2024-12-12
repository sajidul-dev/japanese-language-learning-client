import { useState } from "react";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCreateUser } from "../api/signup";

const SignUp = () => {
  // const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUserMutation = useCreateUser();

  const handleRegistration = () => {
    const registrationData = {
      name: username,
      email,
      password,
      role: "user",
    };
    createUserMutation.mutate(registrationData);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        }}
        className="w-[500px] h-fit bg-gray-300 p-10"
      >
        {/* dot design */}
        <div className="flex items-center gap-x-3">
          <p
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            className="w-3 h-3 rounded-full bg-red-400"
          ></p>
          <p
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            className="w-3 h-3 rounded-full bg-blue-400"
          ></p>
          <p
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            className="w-3 h-3 rounded-full bg-teal-400"
          ></p>{" "}
        </div>
        {/* contune with google */}
        <div className="my-6 flex justify-center">
          <button className="bg-teal-200 text-black px-8 py-2 rounded-2xl flex items-center gap-x-3">
            <FaGoogle className="text-blue-500 text-xl" />
            <p>Continue With Google</p>
          </button>
        </div>
        {/* divide */}
        <div className="text-center text-gray-500">
          ----------------- or -----------------
        </div>
        {/* form */}
        <div className="w-full flex flex-col gap-y-3 justify-center items-center my-6">
          {/* profile pic */}
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src="/images/profileIcon.png"
              alt=""
            />
          </div>
          {/* username */}
          <div className="flex flex-col gap-y-2 w-[80%] mx-auto text-gray-700">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="w-full outline-none border-2 border-gray-700 focus:border-blue-500 bg-gray-300 rounded-md px-3 py-2"
              type="text"
              name=""
              id=""
            />
          </div>
          {/* email */}
          <div className="flex flex-col gap-y-2 w-[80%] mx-auto text-gray-700">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none border-2 border-gray-700 focus:border-blue-500 bg-gray-300 rounded-md px-3 py-2"
              type="email"
              name=""
              id=""
            />
          </div>
          {/* password */}
          <div className="flex flex-col gap-y-2 w-[80%] mx-auto text-gray-700">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none border-2 border-gray-700 focus:border-blue-500 bg-gray-300 rounded-md px-3 py-2"
                type="password"
                name=""
                id=""
              />
              <FaEyeSlash className="absolute top-[50%] -translate-y-1/2 right-4 cursor-pointer" />
            </div>
          </div>
          {/* sign-up button */}
          <div>
            <button
              onClick={handleRegistration}
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              className="bg-teal-400 hover:bg-teal-500 transition-all duration-300 ease-in text-white px-10 py-2 rounded-full"
            >
              Create
            </button>
          </div>

          {/* direct to login */}
          <div>
            <div className="text-xs">
              You have already an account?{" "}
              <Link
                className="hover:text-blue-500 hover:font-bold"
                to="/sign-in"
              >
                Login
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
