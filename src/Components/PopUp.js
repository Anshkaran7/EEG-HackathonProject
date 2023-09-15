import Image from "next/image";
import Link from "next/link";

const PopUp = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-70 bg-gray-800">
      <div className="relative bg-white rounded-lg p-6 h-64 w-96 items-center justify-center flex">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/eeg.png"
            layout="fill"
            objectFit="cover"
            
            className="rounded-lg "
          />
        </div>
        <div className="relative z-10 justify-center items-center">
          <h1 className="text-xl text-center font-semibold mt-4 text-theme-gray-dark">
            EEG Connected ?
          </h1>
          <div className="flex flex-row  gap-x-5 items-center">

          <Link href="/eeg/reports"
            className="mt-4 p-2 px-7 bg-theme-blue  text-white rounded-md hover:bg-blue-800 duration-300"
           
          >
            Proceed
          </Link>
          <button
            className="mt-4 p-2 px-7 bg-red-400  text-white rounded-md hover:bg-red-800 duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
