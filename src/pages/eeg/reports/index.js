import { IconMessageCircle } from "@tabler/icons-react";
import Navigation from "../../../Components/Navigation";
import EEGGraph from "../../../Components/Chart";

const Reports = () => {
    return (
        <div className="w-full h-screen bg-gray-100 flex">
            <div className=''>
                <Navigation type="doctor" activeTab={"Reports"} />
            </div>

            <div className=" flex-col bg-white w-full rounded-lg shadow-md m-6  flex">
                <p className="text-base m-6  text-theme-gray-dark font-medium">Reports</p>

                <div className="flex justify-center items-center h-screen">
                    <EEGGraph />
                </div>
            </div>

            <button className="fixed flex bottom-8 right-8 p-2 border-2 border-red-400 rounded-full shadow-md">
                <IconMessageCircle className="text-red-400" />
            </button>
        </div>
    );
}

export default Reports;