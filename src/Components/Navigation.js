import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Sidebar from './Sidebar'
import { Analysis, Doctor, MenuIcon, SchoolSection } from './Icons'
import Image from 'next/image'

function Navigation({ activeTab, bottomNav = true }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative'>
            {/* black overlay - prevents accessing application on background when the menu is open */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                onClick={() => handleMenu()} className={`${isOpen ? "fixed" : "hidden"} md:hidden z-40 w-screen h-screen bg-black bg-opacity-60`}></motion.div>

            {/* navigation for bigger screens */}
            <div
                className="sticky top-0 hidden md:flex">
                <Sidebar activeTab={activeTab} />
            </div>

            {/* sidebar navigation for smaller screens */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? 0 : "-100%" }}
                transition={{ duration: 0.3, bounce: 0 }}
                className="fixed bottom-0 z-50 md:hidden">
                <Sidebar activeTab={activeTab} />
            </motion.div>

            {/* header - navigation for smaller screens */}
            <div className="flex fixed w-full top-0 z-30 md:hidden bg-white shadow-lg items-center justify-between h-[87px] px-4">
                <Link href="/eeg">
                <Image src="/assets/Logo.png" alt='logo' height={70} width={70} />

                </Link>
                <button onClick={() => handleMenu()}>
                    <MenuIcon />
                </button>
            </div>

            {/* footer navigation */}
            {bottomNav && (
                <div className='fixed bottom-0 left-0 z-30 flex justify-between w-full p-4 text-xs font-medium bg-white border-t border-t-gray-200 text-theme-gray md:hidden'>
                 
                        <>
                            <div className='flex flex-col items-start w-full'>
                                <Link href={"/eeg/analysisRemarks"} className={`flex flex-col items-center gap-1 ${activeTab === "Analysis" ? 'text-theme-purple-1' : 'text-theme-gray'}`}>
                                    <Analysis className={"w-6 h-6"}  fillColor={activeTab === "Analysis" ? "#FF3636" : "#6E6E6E"} />
                                    <span className={activeTab === "Analysis" ? "text-red-600" : "text-gray-600"}>Analysis</span>                    
                                </Link>
                            </div>
                            <Link href={"/eeg/doctorAppointments"} className={`flex flex-col items-center gap-1 ${activeTab === "Doctor" ? 'text-theme-purple-1' : 'text-theme-gray'}`}>
                                <Doctor className={"w-6 h-6"} fillColor={activeTab === "Doctor" ? "#FF3636" : "#6E6E6E"} />
                                <span className={activeTab === "Doctor" ? "text-red-600" : "text-gray-600"}> Appointments</span>                    
                            </Link>
                            <div className={`flex flex-col items-end w-full ${activeTab === "School" ? ' text-theme-purple-1' : 'text-theme-gray'}`}>
                                <Link href={"/eeg/schoolSection"} className={`flex flex-col items-center gap-1`}>
                                    <SchoolSection className="w-6 h-6" fillColor={activeTab === "School" ? "#FF3636" : "#6E6E6E"} />
                                    <span className={activeTab === "School" ? "text-red-600" : "text-gray-600"}>School Section</span>                   
                                </Link>
                            </div>
                        </>
                    
                </div>
            )}

        </div>
    )
}

export default Navigation