import { useState } from "react";
import { Analysis, Doctor, NewSession, Reports, SchoolSection } from "../../Components/Icons"
import PopUp from "../../Components/PopUp";
import { IconMessageCircle } from "@tabler/icons-react";
import Link from "next/link";

export default function Dahsboard() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (

    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-y-6">

        <div className="flex flex-row gap-x-6 ">
          <button
            onClick={openPopUp}
            className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-green duration-300 hover:bg-opacity-50 bg-theme-green bg-opacity-25 px-28 py-4 rounded-lg shadow-md"
          >
            <NewSession className="w-5 h-5" />
            <p className="text-theme-gray-dark font-medium text-lg">New Session</p>
          </button>
          {isPopUpOpen && <PopUp onClose={closePopUp} />}
          <Link href={"/eeg/reports"} className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-blue duration-300 hover:bg-opacity-50 bg-theme-blue bg-opacity-25 px-32 py-4 rounded-lg shadow-md">
            <Reports className="w-5 h-5" />
            <p className="text-theme-gray-dark font-medium text-lg ">Reports</p>
          </Link>
        </div>

        <div className="flex flex-row gap-x-6 ">

          <Link href="/eeg/analysisRemarks" className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-blue duration-300 hover:bg-opacity-50 bg-theme-blue bg-opacity-25 px-24 py-4 rounded-lg shadow-md">
            <Analysis className="w-5 h-5" />
            <p className="text-theme-gray-dark font-medium text-lg ">Analysis Remarks</p>
          </Link>

          <Link href="/eeg/doctorAppointments" className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-green duration-300 hover:bg-opacity-50 bg-theme-green bg-opacity-25 px-16 py-4 rounded-lg shadow-md">
            <Doctor className="w-5 h-5" />
            <p className="text-theme-gray-dark font-medium text-lg ">Doctor's Appointments</p>
          </Link>
        </div>

        <div className="items-center flex justify-center">
          <Link href="/eeg/schoolSection" className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-yellow duration-300 hover:bg-opacity-50 bg-theme-yellow bg-opacity-25 px-24 py-4 rounded-lg shadow-md">
            <SchoolSection className="w-5 h-5" />
            <p className="text-theme-gray-dark font-medium text-lg ">School Section</p>
          </Link>

        </div>
      </div>

      <button className="fixed flex bottom-8 right-8 p-2 border-2 border-red-400 rounded-full shadow-md">
        <IconMessageCircle className="text-red-400" />
      </button>
    </div>

  )
}