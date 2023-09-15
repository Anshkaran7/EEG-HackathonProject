import Image from 'next/image'
import React from 'react'

import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'




function RemarkCard({ data }) {

    return (
        <div className="cursor-pointer rounded-lg bg-theme-blue bg-opacity-20 border-2 shadow-md ">
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
                                <p className="font-semibold text-base  ">{data.name}</p>

                                {/* location */}
                                <div className='flex items-center gap-1'>
                                    <MapPinIcon className={"w-6 h-5"} />
                                    <p className="text-sm text-theme-gray-dark font-medium ">{data.profession}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className='flex justify-start '>
                    <button className="text-sm underline text-theme-blue  font-medium ">View Remark</button>

                    </div>

                </div>


                <p className='absolute text-theme-gray-dark right-4 top-2'>
                    {data.date}
                </p>
            </div>
        </div>
    );
}


export default RemarkCard