import Image from 'next/image'
import React from 'react'

import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'




function AppoitmentCard({ data, first }) {

  return (
    <div className={` cursor-pointer rounded-lg bg-theme-blue bg-opacity-20 border-2 shadow-md`}>
      <div className='p-4 gap-x-48 flex flex-col md:flex-row justify-between relative'>
        <div className='w-full flex flex-col justify-center gap-y-2'>
          <Link href="" className='flex items-start justify-between'>
            <div className='flex items-center gap-x-4'>
              {/* profile image */}
              <Image
                alt={data.name}
                src={data.image}
                width={100}
                height={100}
                className='h-16 w-16 rounded-lg'
              />

              {/* patient details */}
              <div>
                {/* name */}
                <p className="font-semibold text-theme-gray-dark">{data.name}</p>

                {/* location */}
                <div className='flex items-center gap-1'>
                  <MapPinIcon className={"w-6 h-5"}/>
                  <p className="text-sm  text-theme-gray-dark">{data.location}</p>
                </div>
              </div>
            </div>
          </Link>
          <p className="text-sm text-theme-gray-dark">Scheduled at {data.schedule}</p>

        
          <div className='flex flex-row border-t-2  md:flex-row justify-between items-center gap-2'>
            <button className='flex items-center gap-x-2 '>
              <CalendarDaysIcon className="w-5 stroke-theme-gray-dark" />
              <span className={`text-sm text-theme-gray-dark`}>Reschedule</span>
            </button>
            <button className='flex items-center gap-x-2' onClick={() => window.location.href = `tel:1234567890`}>
              <PhoneIcon className="w-4 stroke-theme-gray-dark" />
              <span className="text-sm text-theme-gray-dark">Call Doctor</span>
            </button>

          </div>

          
        </div>


        <button className='absolute right-4 top-2'>
            <ArrowLongRightIcon className={first ? 'fill-white w-6' : 'w-6 fill-theme-gray'} />
          </button>
      </div>
    </div>
  );
}


export default AppoitmentCard