
import Image from "next/image";
import { Analysis, Doctor, NewSession, Reports, SchoolSection } from "../../Components/Icons"


import Link from "next/link";
import { IconMessageCircle } from "@tabler/icons-react";
import Chat from "../../Components/Chat";
import { useState } from "react";


const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="my-20 ">
        <Image src="/assets/Logo.png" alt='logo' height={150} width={150} />
        <p className="text-theme-gray-dark text-center font-medium text-xl ">MiniMindWave</p>

      </div>
      <div className="flex flex-row gap-x-6 ">

        <Link href="/eeg/dashboard" className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-blue duration-300 hover:bg-opacity-50 bg-theme-blue bg-opacity-25 px-24 py-4 rounded-lg shadow-md">
          <Analysis className="w-5 h-5" />
          <p className="text-theme-gray-dark font-medium text-lg ">School</p>
        </Link>

        <Link href="/eeg/dashboard" className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-green duration-300 hover:bg-opacity-50 bg-theme-green bg-opacity-25 px-16 py-4 rounded-lg shadow-md">
          <Doctor className="w-5 h-5" />
          <p className="text-theme-gray-dark font-medium text-lg ">Parent's</p>
        </Link>

        <Link href="/eeg/dashboard" className="flex flex-row text-theme-gray-dark gap-x-2 items-center hover:bg-theme-yellow duration-300 hover:bg-opacity-50 bg-theme-yellow bg-opacity-25 px-24 py-4 rounded-lg shadow-md">
          <SchoolSection className="w-5 h-5" />
          <p className="text-theme-gray-dark font-medium text-lg ">Doctor</p>
        </Link>
      </div>

      <button onClick={toggleChat} className="fixed flex bottom-8 right-8 p-2 border-2 border-red-400 rounded-full shadow-md">
        <IconMessageCircle className="text-red-400" />
      </button>
      {/* {isChatOpen && <Chat />} */}
    </div>
  );
}

export default Index;