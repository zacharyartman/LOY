import React from 'react';

const SubscribeForm = () => {
  return(
  <form
    action="https://formbold.com/s/3dG5E"
    method="POST"
  className="py-10"
  >
    <div className="mb-7.5 flex flex-col gap-3">
      <input
        type="text"
        name='text_input_C3106933-5EDF-43CE-BF57-80464F5187CB'
        placeholder="Full name"
        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
      />
    <input
        type="email"
        placeholder="Email address"
        name='email_input_66E1DD18-0A42-4673-A7E4-B92DF0BCCF1F'
        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
      />
    <input
        type="tel"
        placeholder="Phone number"
        name='phone_input_7381D95D-A1DA-4BDC-BC3E-68E47DC1809B'
        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
      />
    </div>
    <div className="flex flex-wrap xl:justify-between ">
      <button
        aria-label="subscribe button"
        className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
      >
        Subscribe
        <svg
          className="fill-white"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
            fill=""
          />
        </svg>
      </button>
    </div>
  </form>);
  }

export default SubscribeForm;