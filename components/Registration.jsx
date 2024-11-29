import Image from "next/image";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";
import RegistrationImage from "../public/assests/happy.png";
const Registration = () => {
  return (
    <div className='container mx-auto px-4 min-h-screen pt-10'>
      <h4 className='text-2xl font-bold text-[#092a67] text-center mb-10'>
        Register To EduSmart
      </h4>

      <div className='registration-main h-4/5 grid grid-cols-1 md:grid-cols-2 border border-[#092a67] rounded-md'>
        <div className='registration-img overflow-hidden'>
          <Image
            src={RegistrationImage}
            alt='Registration'
            className='w-full h-full object-cover rounded-tl-md rounded-bl-md'
          />
        </div>
        <div className='registration-form bg-[#E9F1FA] rounded-tr-md rounded-br-md'>
          <div className=''>
            <form className='p-6 rounded shadow-md w-full'>
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
                  className='w-full bg-[#E9F1FA] border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none'
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
                  id='username'
                  name='username'
                  required
                  placeholder='John Doe'
                  className='w-full border bg-[#E9F1FA] border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none'
                />
              </div>

              {/* Password */}
              <div className='mb-4 relative'>
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
                  required
                  placeholder='123******'
                  className='w-full border bg-[#E9F1FA] border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none'
                />
                <FaEyeSlash className='absolute top-[50px] right-3 transform -translate-y-1/2 cursor-pointer' />
              </div>

              {/* Terms and Conditions */}
              <div className='mb-4 flex items-center'>
                <input
                  type='checkbox'
                  id='terms'
                  name='terms'
                  className='h-4 w-4 bg-[#E9F1FA] border-gray-300 rounded'
                />
                <label htmlFor='terms' className='ml-2 text-[#092a67]'>
                  I agree to the terms and conditions
                </label>
              </div>

              {/* Submit Button */}
              <div className='mb-4'>
                <button
                  type='submit'
                  className='w-full text-[#092a67] bg-lime-400 hover:bg-lime-500 py-2 px-4 rounded focus:outline-none'
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
