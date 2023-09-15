import { IconMessageCircle } from "@tabler/icons-react";
import Navigation from "../../../Components/Navigation";
import RemarkCard from "../../../Components/Cards/RemarkCard";


const data = [
    {
        name: 'Nikhil Patel',
        profession: "School Counselor",
        image: '/assets/remark1.jpg',
        date: "28/10/2023"
    },
    {
        name: 'Hinal Desai',
        profession: "School Teacher",
        image: '/assets/remark2.jpg',
        date: "13/09/2023"
    }
]


const Analysis = () => {
    return (
        <div className="w-full h-screen bg-gray-100 flex">
            <div className=''>
                <Navigation activeTab={"School"} />
            </div>

            <div className=" flex flex-col bg-white w-full rounded-lg shadow-md m-6 ">

                <div className="flex  m-6 justify-between">
                    <p className="text-base  text-theme-gray-dark font-medium">Remark from School</p>
                </div>



                <div className="flex flex-col gap-y-4 mx-6 ">
                    {data.map((remarkData) => (
                        <div key={remarkData.id} className="w-full" >
                            <RemarkCard data={remarkData} />
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