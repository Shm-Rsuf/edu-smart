import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";

export const metadata = {
  title: "Login Page",
  description: "Login page",
};
const LoginPage = () => {
  return (
    <div className='login-form container mx-auto bg-[#E9F1FA] w-full flex justify-center items-center py-10 rounded-md p-4 mt-10 sm:w-[70%] lg:w-[60%]'>
      <form className='p-4 rounded-md shadow-md w-[100%] sm:w-[80%]'>
        <div className='mb-4'>
          <label
            htmlFor='username'
            className='block text-[#092a67] font-medium'
          >
            Username/Email
          </label>
          <input
            type='email'
            id='username'
            name='username'
            required
            placeholder='John Doe'
            className='w-full border bg-[#E9F1FA] border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none'
          />
        </div>
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
        <div className='mb-4'>
          <button
            type='submit'
            className='text-[#092a67] bg-lime-400 px-4 py-2 rounded hover:bg-lime-500 font-bold duration-300'
          >
            Login
          </button>
        </div>

        <p className='text-sm text-center text-[#092a67]'>
          Have not an account?{" "}
          <Link
            href='/'
            className='text-[#092a67] hover:underline duration-300'
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
