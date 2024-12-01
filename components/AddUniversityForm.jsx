"use client";
import { FaFileLines } from "react-icons/fa6";

import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AddUniversityForm = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { authToken } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address_line_1: "",
    address_line_2: "",
    code: "7858",
    country: "",
    city: "",
    state: "",
    zip: "",
    logo: "logo",
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // const formDataToSend = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   if (value) {
    //     formDataToSend.append(key, value);
    //   }
    // });

    try {
      const response = await fetch(
        "https://edu-smart-demo.onrender.com/api/v1/public/university",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("University successfully created!");
        setFormData({
          name: "",
          address_line_1: "",
          address_line_2: "",
          city: "",
          state: "",
          country: "",
          zip: "",
          code: "",
          description: "",
        });
      } else {
        setError(
          result.message || "An error occurred while submitting the form."
        );
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='grid grid-cols-5 gap-4 p-4 bg-[#E9F1FA] my-5 rounded-lg'
    >
      <div className='grid-cols-1'>
        <div className='form-img border p-2 flex flex-col gap-2'>
          <label htmlFor='image' className='block text-[#092a67] font-bold'>
            Profile Picture
          </label>
          <Image
            src='/assests/form-image.png'
            width={200}
            height={200}
            alt='Registration'
            className='w-full h-full object-cover rounded-md'
          />

          {/* Custom file input */}
          <div className='relative w-full'>
            <input
              type='file'
              name='image'
              id='image'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              onChange={handleFileChange}
            />
            <label
              htmlFor='image'
              className='bg-[#E9F1FA] text-[#092a67] py-1 px-3 rounded cursor-pointer inline-block w-full text-center border-dashed border border-[#092a67]'
            >
              <span className='flex justify-center items-center gap-2'>
                {" "}
                <FaFileLines />
                Upload Media
              </span>
            </label>
          </div>

          <button className='bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600'>
            Remove
          </button>
        </div>

        <div className='form-media p-2 rounded'>
          <label
            htmlFor='media'
            className='block text-[#092a67] font-bold mb-2'
          >
            SSM File Upload
          </label>

          {/* Custom file input */}
          <div className='relative'>
            <input
              type='file'
              name='media'
              id='media'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              onChange={handleFileChange}
            />
            <label
              htmlFor='image'
              className='bg-[#E9F1FA] text-[#092a67] py-1 px-3 rounded cursor-pointer inline-block w-full text-center border-dashed border border-[#092a67]'
            >
              <span className='flex justify-center items-center gap-2'>
                {" "}
                <FaFileLines />
                Upload Media
              </span>
            </label>
          </div>
        </div>

        <div className='form-media p-2 rounded'>
          <label
            htmlFor='media'
            className='block text-[#092a67] font-bold mb-2'
          >
            Govt. File Upload
          </label>

          {/* Custom file input */}
          <div className='relative'>
            <input
              type='file'
              name='media'
              id='media'
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              onChange={handleFileChange}
            />
            <label
              htmlFor='image'
              className='bg-[#E9F1FA] text-[#092a67] py-1 px-3 rounded cursor-pointer inline-block w-full text-center border-dashed border border-[#092a67]'
            >
              <span className='flex justify-center items-center gap-2'>
                {" "}
                <FaFileLines />
                Upload Media
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className='col-span-4'>
        <div className='form-university p-2 rounded'>
          <label htmlFor='name' className='block font-bold text-[#092a67]'>
            University Name
            <div className='mt-2'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='University Of Malaysia'
                className='w-full p-2 border text-[#092a67] border-[#092a67] rounded focus:outline-none bg-[#E9F1FA]'
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className='form-description p-2 rounded'>
          <label
            htmlFor='description'
            className='block font-bold text-[#092a67]'
          >
            Description
            <div className='mt-2'>
              <textarea
                id='description'
                name='description'
                placeholder='Enter the description here...'
                rows='4'
                className='w-full p-2 border border-[#092a67] rounded focus:outline-none bg-[#E9F1FA]'
                onChange={handleChange}
              ></textarea>
            </div>
          </label>
        </div>

        <div className='form-address p-2 rounded'>
          <div className='flex gap-4'>
            {/* Address 1 */}
            <div className='w-1/2'>
              <label
                htmlFor='address_line_1'
                className='block font-bold mb-2 text-[#092a67]'
              >
                Address 1
              </label>
              <input
                type='text'
                id='address_line_1'
                name='address_line_1'
                placeholder='Enter Address Line 1'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              />
            </div>

            {/* Address 2 */}
            <div className='w-1/2'>
              <label
                htmlFor='address_line_2'
                className='block font-bold mb-2 text-[#092a67]'
              >
                Address 2
              </label>
              <input
                type='text'
                id='address_line_2'
                name='address_line_2'
                placeholder='Enter Address Line 2'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='form-address p-2 rounded'>
          <div className='flex gap-4'>
            {/* Address 1 */}
            <div className='w-1/2'>
              <label
                htmlFor='address-1'
                className='block font-bold mb-2 text-[#092a67]'
              >
                Contact Number
              </label>
              <input
                type='text'
                id='address-1'
                name='address-1'
                placeholder='1234567890'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              />
            </div>

            {/* Address 2 */}
            <div className='w-1/2'>
              <label
                htmlFor='address-2'
                className='block font-bold mb-2 text-[#092a67]'
              >
                Official Email
              </label>
              <input
                type='email'
                id='address-2'
                name='address-2'
                placeholder='example@.com'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='form-address p-2 rounded'>
          <div className='flex gap-4'>
            {/* Address 1 */}
            <div className='w-1/2'>
              <label
                htmlFor='address-1'
                className='block font-bold mb-2 text-[#092a67]'
              >
                Website
              </label>
              <input
                type='text'
                id='address-1'
                name='address-1'
                placeholder='1234567890'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              />
            </div>

            {/* Address 2 */}
            <div className='w-1/2'>
              <label
                htmlFor='country'
                className='block font-bold mb-2 text-[#092a67]'
              >
                Country
              </label>
              <select
                id='country'
                name='country'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              >
                <option value=''>Select Country</option>
                <option value='malaysia'>Malaysia</option>
                <option value='singapore'>Singapore</option>
                <option value='thailand'>Thailand</option>
                <option value='indonesia'>Indonesia</option>
                <option value='philippines'>Philippines</option>
                <option value='australia'>Australia</option>
              </select>
            </div>
          </div>
        </div>

        <div className='form-address p-2 rounded'>
          <div className='flex gap-4'>
            {/* Address 1 */}
            <div className='w-1/2'>
              <label
                htmlFor='city'
                className='block font-bold mb-2 text-[#092a67]'
              >
                City
              </label>
              <select
                id='city'
                name='city'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              >
                <option value=''>Select City</option>
                <option value='kuala-lumpur'>Kuala Lumpur</option>
                <option value='george-town'>George Town</option>
                <option value='johor-bahru'>Johor Bahru</option>
                <option value='malacca'>Malacca</option>
              </select>
            </div>

            {/* Address 2 */}
            <div className='w-1/2'>
              <label
                htmlFor='state'
                className='block font-bold mb-2 text-[#092a67]'
              >
                State
              </label>
              <select
                id='state'
                name='state'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              >
                <option value=''>Select State</option>
                <option value='selangor'>Selangor</option>
                <option value='penang'>Penang</option>
                <option value='johor'>Johor</option>
                <option value='melaka'>Melaka</option>
                <option value='perak'>Perak</option>
                <option value='sabah'>Sabah</option>
                <option value='sarawak'>Sarawak</option>
              </select>
            </div>

            <div className='w-1/2'>
              <label
                htmlFor='zip'
                className='block font-bold mb-2 text-[#092a67]'
              >
                Zep Code
              </label>
              <input
                type='text'
                id='zip'
                name='zip'
                placeholder='Enter Zip Code'
                className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='my-8'>
            <button
              type='submit'
              className='text-[#092a67] bg-lime-400 px-4 py-2 rounded hover:bg-lime-500 font-bold duration-300'
            >
              Add University
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUniversityForm;
