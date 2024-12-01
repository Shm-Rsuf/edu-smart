import Footer from "@/components/Footer";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import DashboardNavbar from "../../../components/Dashboard-Nav";

export const metadata = {
  title: "University page",
  description: "University page",
};
const University = () => {
  return (
    <div className='col-span-6'>
      {/* <DashboardNavbar /> */}
      <div className='p-4'>
        <h4 className='text-2xl font-bold text-[#092a67] pt-2 flex items-center gap-2'>
          <span> Add New</span> <FaUniversity />
        </h4>
        <p className='text-[#092a67]'>
          Note: Star (*) marked fields are required to fill.
        </p>

        <form className='grid grid-cols-5 gap-4 p-4 bg-[#E9F1FA] my-5'>
          <div className='grid-cols-1'>
            <div className='form-img border p-2 flex flex-col gap-2'>
              <label htmlFor='image' className='block font-bold'>
                Profile Picture
              </label>
              <Image
                src='/assests/happy.png'
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
                />
                <label
                  htmlFor='image'
                  className='bg-blue-500 text-white py-1 px-3 rounded cursor-pointer block w-full text-center'
                >
                  Upload Media
                </label>
              </div>

              <button className='bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600'>
                Remove
              </button>
            </div>

            <div className='form-media p-2 rounded'>
              <label htmlFor='media' className='block font-bold mb-2'>
                SSM File Upload
              </label>

              {/* Custom file input */}
              <div className='relative'>
                <input
                  type='file'
                  name='media'
                  id='media'
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                />
                <label
                  htmlFor='media'
                  className='bg-blue-500 text-white py-2 px-3 rounded cursor-pointer block w-full text-center'
                >
                  Upload Media
                </label>
              </div>
            </div>

            <div className='form-media p-2 rounded'>
              <label htmlFor='media' className='block font-bold mb-2'>
                Govt. File Upload
              </label>

              {/* Custom file input */}
              <div className='relative'>
                <input
                  type='file'
                  name='media'
                  id='media'
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                />
                <label
                  htmlFor='media'
                  className='bg-blue-500 text-white py-2 px-3 rounded cursor-pointer block w-full text-center'
                >
                  Upload Media
                </label>
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='form-university p-2 rounded'>
              <label
                htmlFor='university'
                className='block font-bold text-[#092a67]'
              >
                University Name
                <div className='mt-2'>
                  <input
                    type='text'
                    id='university'
                    name='university'
                    placeholder='University Of Malaysia'
                    className='w-full p-2 border text-[#092a67] border-[#092a67] rounded focus:outline-none bg-[#E9F1FA]'
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
                  ></textarea>
                </div>
              </label>
            </div>

            <div className='form-address p-2 rounded'>
              <div className='flex gap-4'>
                {/* Address 1 */}
                <div className='w-1/2'>
                  <label
                    htmlFor='address-1'
                    className='block font-bold mb-2 text-[#092a67]'
                  >
                    Address 1
                  </label>
                  <input
                    type='text'
                    id='address-1'
                    name='address-1'
                    placeholder='Enter Address Line 1'
                    className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
                  />
                </div>

                {/* Address 2 */}
                <div className='w-1/2'>
                  <label
                    htmlFor='address-2'
                    className='block font-bold mb-2 text-[#092a67]'
                  >
                    Address 2
                  </label>
                  <input
                    type='text'
                    id='address-2'
                    name='address-2'
                    placeholder='Enter Address Line 2'
                    className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
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
                    htmlFor='address-2'
                    className='block font-bold mb-2 text-[#092a67]'
                  >
                    Zep Code
                  </label>
                  <input
                    type='text'
                    id='address-2'
                    name='address-2'
                    placeholder='Enter Zip Code'
                    className='w-full p-2 bg-[#E9F1FA] border border-[#092a67] rounded focus:outline-none'
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

        <Footer />
      </div>
    </div>
  );
};

export default University;
