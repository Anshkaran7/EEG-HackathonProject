import React, { useState, useEffect } from 'react'
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import Link from 'next/link'
import Image from 'next/image';



function Login() {
  const [contact, setContact] = useState('')

  
  const handleContactChange = (e) => {
    const input = e.target.value;
    // Use regex to allow only 10-digit numbers
    const onlyNumbers = input.replace(/[^0-9]/g, '').slice(0, 10);
    setContact(onlyNumbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-screen pt-10">
      <SnackbarProvider maxSnack={3}>
        {/* branding */}
        <div className='flex flex-col  items-center'>
          <Image src="/assets/Logo.png" alt='logo' height={150} width={150} />
          <p className='text-theme-gray-dark font-semibold mt-6 text-3xl'>MiniMindWave</p>
        </div>

        {/* form */}
        <div className="flex-1 justify-center px-2 mt-10 ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4 p-6  md:border-[4px] rounded-2xl border-theme-purple-light"
          >
            <div className="flex flex-col gap-4 md:flex-row">



            <div className="space-y-2 w-full">
                <label className="text-sm text-theme-gray">Contact No.</label>
                <input
                  onChange={handleContactChange}
                  value={contact}
                  type="text" // Use text type to allow only numbers after validation
                  placeholder="Contact no."
                  className="p-2 w-full bg-gray-200 text-theme-gray-dark font-semibold placeholder:font-light duration-150 border-[3px] border-transparent rounded-lg outline-none focus:bg-theme-purple-light focus:border-theme-purple-1"
                />
              </div>
            </div>



            <div className="flex flex-col gap-4 mt-6">
              <Link href="/eeg" className="w-full p-2 text-white duration-150 text-center rounded-lg bg-red-400 hover:bg-red-600">Login</Link>
              <Link href="/register" className="w-full p-2 font-semibold text-center duration-150 rounded-lg text-red-400 hover:text-red-600">Back to Register</Link>
            </div>

          </form>
        </div>



      </SnackbarProvider >

    </div>
  )
}

export default Login
