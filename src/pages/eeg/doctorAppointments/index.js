import { IconMessageCircle } from "@tabler/icons-react";
import AppoitmentCard from "../../../Components/Cards/AppointmentCard";
import Navigation from "../../../Components/Navigation";


const data = [
  {
      name: 'Dr. Nikhil',
      location: 'New York, USA',
      schedule: '10:00 AM, 12th June 2021',
      image: '/assets/patient.png'

  }

]

const Doctor = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex">
      <div className=''>
        <Navigation activeTab={"Doctor"} />
      </div>

      <div className="flex flex-col bg-white w-full rounded-lg shadow-md m-6">
        <div className="flex  m-6 justify-between">
          <p className="text-base  text-theme-gray-dark font-medium">Upcoming Appointments</p>
          <button className="px-6 py-2 bg-theme-green h-10 rounded-lg duration-300 bg-opacity-25 hover:bg-theme-green hover:bg-opacity-50">Book Appointments</button>
        </div>


        <div className="flex flex-col gap-y-4 ml-6 ">
              {data.map((patientData) => (
                <div key={patientData.id} className="w-[40%]" >
                  <AppoitmentCard data={patientData}  />
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

export default Doctor;