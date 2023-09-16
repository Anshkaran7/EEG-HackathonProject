import { IconMessageCircle } from "@tabler/icons-react";
import Navigation from "../../../Components/Navigation";
import AnalysisCard from "../../../Components/Cards/AnalysisCard";


const data = [
    {
        name: 'Dr. Nikhil Patel',
       
        image: '/assets/remark1.jpg',
        date: "28/10/2023"
        
    },
    {
        name: 'Dr. Hinal Desai',
       
        image: '/assets/remark2.jpg',
        date: "13/09/2023"
    }
]


const Analysis = () => {
    return (
        <div className="w-full h-screen bg-gray-100 flex">
            <div className=''>
                <Navigation activeTab={"Analysis"} />
            </div>

            <div className=" flex flex-col bg-white w-full rounded-lg shadow-md m-6 ">

                <div className="flex  m-6 justify-between">
                    <p className="text-base  text-theme-gray-dark font-medium">Latest Remark</p>
                </div>



                <div className="flex flex-col gap-y-4 mx-6 ">
                    {data.map((analysisData) => (
                        <div key={analysisData.id} className="w-full" >
                            <AnalysisCard data={analysisData} />
                        </div>
                    ))}
                </div>
            </div>

            <button className="fixed flex bottom-8 right-8 p-2 border-2 border-red-400 rounded-full shadow-md">
                <IconMessageCircle className="text-red-400" />
            </button>
        </div>
    );
}

export default Analysis;