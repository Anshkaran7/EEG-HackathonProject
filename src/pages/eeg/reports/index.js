import { IconMessageCircle } from "@tabler/icons-react";
import Navigation from "../../../Components/Navigation";
import EEGChart from "@/Components/Eeg";
import { useState } from "react";
const Reports = () => {
    
    const [eegData, setEEGData] = useState([
        { label: '0', value: 10 },
        { label: '1', value: 15 },
        { label: '2', value: 20 },
        // Add more data points as needed
      ]);
    
      // Function to update EEG data (simulated)
      const updateData = () => {
        const newData = eegData.map((point) => ({
          ...point,
          value: point.value + Math.random() * 10 - 5,
        }));
        setEEGData(newData);
      };
    return (
        <div className="w-full h-screen bg-gray-100 flex">
            <div className=''>
                <Navigation type="doctor" activeTab={"Reports"} />
            </div>

            <div className=" bg-white w-full rounded-lg shadow-md m-6  flex">
                <p className="text-base m-6  text-theme-gray-dark font-medium">Reports</p>
                {/* <h1>Next.js EEG Graph Example</h1> */}
      {/* <button onClick={updateData}>Update EEG Data</button> */}
      <EEGChart data={eegData} />

            </div>
           
      
            <button className="fixed flex bottom-8 right-8 p-2 border-2 border-red-400 rounded-full shadow-md">
        <IconMessageCircle className="text-red-400" />
      </button>
        </div>
    );
}

export default Reports;