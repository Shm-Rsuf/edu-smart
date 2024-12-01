"use client";
import Link from "next/link";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from "next/navigation"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { saveAuthToken,saveUserInfo } = useAuth();
  const router = useRouter();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://edu-smart-demo.onrender.com/api/v1/public/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      saveAuthToken(data.data.token);
      saveUserInfo(data.data.first_name,data.data.last_name) 

      router.push("/dashboard");
      
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10 sm:w-[60%] w-[100%]">
      <div className="bg-[#E9F1FA] flex justify-center items-center py-10">
        <form onSubmit={handleLogin} className="p-6 rounded shadow-md w-[65%]">
          {/* Username/Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#092a67] font-medium">
              Username/Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@example.com"
              className="w-full border bg-[#E9F1FA] border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-[#092a67] font-medium"
            >
              Enter Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="123******"
              className="w-full border bg-[#E9F1FA] border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-[50px] right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full text-[#092a67] bg-lime-400 px-4 py-2 rounded hover:bg-lime-500 font-bold duration-300"
            >
              Login
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-sm text-center text-[#092a67]">
            Don’t have an account?{" "}
            <Link
              href="/"
              className="text-[#092a67] hover:underline duration-300"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
