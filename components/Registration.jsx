"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegistrationImage from "../public/assests/happy.png";
import { useAuth } from "../context/AuthContext";

const Registration = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(null);

  const { saveAuthToken, saveUserInfo } = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    try {
      const res = await fetch(
        "https://edu-smart-demo.onrender.com/api/v1/public/register/agent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role, email, password, confirm_password }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed.");
      }

      const data = await res.json();

      saveAuthToken(data.data.token);
      saveUserInfo(data.data.first_name, data.data.last_name);

      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='container mx-auto px-4 min-h-screen pt-10'>
      <h4 className='text-2xl font-bold text-[#092a67] text-center mb-10'>
        Register To EduSmart
      </h4>

      <div className='registration-main h-4/5 grid grid-cols-1 md:grid-cols-2 border border-[#092a67] rounded-md'>
        {/* Registration Image */}
        <div className='registration-img overflow-hidden'>
          <Image
            src={RegistrationImage}
            alt='Registration'
            className='w-full h-full object-cover rounded-tl-md rounded-bl-md max-[767px]:rounded-tr-md max-[767px]:rounded-bl-none'
          />
        </div>

        {/* Registration Form */}
        <div className='registration-form bg-[#E9F1FA] rounded-md'>
          <div className=''>
            <form
              className='p-6 rounded-md shadow-md w-full'
              onSubmit={handleRegister}
            >
              {/* Role Selection */}
              <div className='mb-4'>
                <label
                  htmlFor='role'
                  className='block text-[#092a67] font-medium'
                >
                  Select Role
                </label>
                <select
                  id='role'
                  name='role'
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className='w-full bg-[#E9F1FA] border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none'
                >
                  <option value='student'>Student</option>
                  <option value='teacher'>Teacher</option>
                </select>
              </div>

              {/* Username/Email */}
              <div className='mb-4'>
                <label
                  htmlFor='username'
                  className='block text-[#092a67] font-medium'
                >
                  Username/Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='John Doe'
                  className='w-full border bg-[#E9F1FA] border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none'
                />
              </div>

              {/* Password */}
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-[#092a67] font-medium'
                >
                  Enter Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='123******'
                  className='w-full border bg-[#E9F1FA] border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-[#092a67] font-medium'
                >
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirm_password'
                  name='confirm_password'
                  value={confirm_password}
                  onChange={(e) => setConfirm_password(e.target.value)}
                  required
                  placeholder='123******'
                  className='w-full border bg-[#E9F1FA] border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none'
                />
              </div>

              {/* Terms and Conditions */}
              <div className='mb-4 flex items-center'>
                <input
                  type='checkbox'
                  id='terms'
                  name='terms'
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className='h-4 w-4 bg-[#E9F1FA] border-gray-300 rounded-md'
                />
                <label htmlFor='terms' className='ml-2 text-[#092a67]'>
                  I agree to the terms and conditions
                </label>
              </div>

              {/* Error Message */}
              {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}

              {/* Submit Button */}
              <div className='mb-4'>
                <button
                  type='submit'
                  className='w-full text-[#092a67] bg-lime-400 hover:bg-lime-500 py-2 px-4 rounded-md focus:outline-none duration-300'
                >
                  Continue to Register
                </button>
              </div>

              {/* Sign In Link */}
              <p className='text-sm text-center text-[#092a67]'>
                Already have an account?{" "}
                <Link
                  href='/login'
                  className='text-[#092a67] hover:underline duration-300'
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
