import React, { useState } from 'react';
import ToggleSwitch from '../../../Components/ToggleButton'; // Adjust the path as needed
import { IconMessageCircle } from "@tabler/icons-react";
import MemoryGame from "@/Components/MemoryGame";
import Navigation from "../../../Components/Navigation";
import EEGCard from '@/Components/Cards/EEGCard';

export default function Dashboard() {
  const [isChecked, setIsChecked] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  console.log('isChecked:', isChecked); // Add this line for debugging

  return (
    <div className="w-full h-screen bg-gray-100 flex overflow-hidden">
      <div className="">
        <Navigation activeTab={"Dashboard"} />
      </div>
      <div className="flex-col bg-white w-full rounded-lg shadow-md m-6 flex overflow-y-scroll">
        <p className="text-base m-6 text-theme-gray-dark font-medium">Dashboard</p>

        <div className="flex justify-center items-center">
          <ToggleSwitch
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </div>

        {/* Conditionally render the MemoryGame component */}
        {isChecked ? (
          <div className="overflow-hidden ">
            <MemoryGame />
          </div>
        ) : (
          <EEGCard/>
        )}
      </div>
      <button className="fixed flex bottom-8 right-8 p-2 border-2 border-red-400 rounded-full shadow-md">
        <IconMessageCircle className="text-red-400" />
      </button>
    </div>
  );
}
