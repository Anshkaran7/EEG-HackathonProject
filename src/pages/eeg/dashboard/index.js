import { useState } from "react";
import { Analysis, Doctor, NewSession, Reports, SchoolSection } from "../../../Components/Icons"
import PopUp from "../../../Components/PopUp";
import { IconMessageCircle } from "@tabler/icons-react";
import Link from "next/link";
import Navigation from "../../../Components/Navigation";
import ToggleButton from "../../../Components/ToggleButton";

export default function Dahsboard() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const openPopUp = () => {
        setIsPopUpOpen(true);
    };

    const closePopUp = () => {
        setIsPopUpOpen(false);
    };

    return (

        <div className="w-full h-screen bg-gray-100 flex">
            <div className=''>
                <Navigation activeTab={"Dashboard"} />
            </div>
            <div className=" flex-col bg-white w-full rounded-lg shadow-md m-6  flex">
                <p className="text-base m-6  text-theme-gray-dark font-medium">Dashboard</p>

                <div className="flex justify-center items-center">
                    <ToggleButton />

                    </div>
                
            </div>
            <button className="fixed flex bottom-8 right-8 p-2 border-2 border-red-400 rounded-full shadow-md">
                <IconMessageCircle className="text-red-400" />
            </button>
        </div>

    )
}