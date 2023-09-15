import React, { useEffect, useState } from 'react'
import LinkItem from './sidebar/LinkItem'
import { Analysis,  Doctor, Reports, SchoolSection } from './Icons'
import Image from 'next/image'


function Sidebar({ activeTab }) {


    return (
        // will be only visible on screens larger than md
        <div className="flex flex-col h-screen overflow-auto bg-white border-r border-gray-300 scrollbar-light w-60">
            {/* logo */}
            <div className="flex items-center flex-col h-24 mt-6 px-8 py-2 border-b-gray-200">
                <Image src="/assets/Logo.png" alt='logo' height={80} width={80} />
                <p className='text-theme-gray-dark font-semibold text-lg'>MiniMindWave</p>
            </div>

            {/* nav links */}
            <div className="flex flex-col justify-between h-full gap-4 mt-20 text-sm">

                {/* main links */}
                <div className="px-4 py-4 space-y-4 ">
                    <LinkItem redirectUrl="/eeg/reports" activeTab={activeTab} currentTab="Reports">
                        <Reports className={`w-6 h-6`} fillColor={activeTab === "Reports" ? "#FF3636" : "#6E6E6E"} />
                        <span className={activeTab === "Reports" ? "text-red-600" : "text-gray-600"}>Reports</span>
                    </LinkItem>

                    <LinkItem redirectUrl="/eeg/analysisRemarks" activeTab={activeTab} currentTab="Analysis">
                        <Analysis className="w-6 h-6" fillColor={activeTab === "Analysis" ? "#FF3636" : "#6E6E6E"} />
                        <span className={activeTab === "Analysis" ? "text-red-600" : "text-gray-600"}>Analysis</span>                    
                    </LinkItem>

                    <LinkItem redirectUrl="/eeg/doctorAppointments" activeTab={activeTab} currentTab="Doctor">
                        <Doctor className="w-6 h-6" fillColor={activeTab === "Doctor" ? "#FF3636" : "#6E6E6E"} />
                        <span className={activeTab === "Doctor" ? "text-red-600" : "text-gray-600"}>Doctor's Appointments</span>                    
                    </LinkItem>

                    <LinkItem redirectUrl="/eeg/schoolSection" activeTab={activeTab} currentTab="School">
                        <SchoolSection className="w-6 h-6" fillColor={activeTab === "School" ? "#FF3636" : "#6E6E6E"} />
                        <span className={activeTab === "School" ? "text-red-600" : "text-gray-600"}>School Section</span>                   
                    </LinkItem>

                </div>
            </div>
            <div className='border-[1px]'></div>
            {/* Profile */}
            <div className='mx-4 my-2'>
                <LinkItem redirectUrl="/eeg/profile" activeTab={activeTab} currentTab="profile">
                    <div className="" strokeColor={activeTab === "profile" ? "#FF3636 " : "#6E6E6E"}  >
                        <Image src={"/assets/profile.jpeg"} alt='profile' height={200} width={200} className={`w-12 h-12 rounded-full ${activeTab === "profile" ? "border-4 border-red-400 shadow-md" : ""}`} />
                    </div>
                    <span className={activeTab === "profile" ? "text-red-600" : "text-gray-600"}>Profile</span>
                </LinkItem>
            </div>
        </div>
    )
}

export default Sidebar