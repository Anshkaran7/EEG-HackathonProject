
import Navigation from "../../../Components/Navigation";
import Profile from "../../../Components/Profile/Profile";
import ProfileDetails from "../../../Components/Profile/ProfileDetails";
import {  SnackbarProvider } from "notistack";

const profile = () => {
    return (
        <div className="min-h-screen md:flex">
            <SnackbarProvider maxSnack={3}>
                <Navigation type="doctor" activeTab="profile" />

                <div className="items-start flex flex-col justify-between h-1   mt-10 ml-8">
                    <p className="text-xl font-semibold text-theme-gray mb-8">Profile Setting</p>



                    <div className="border-2 border-gray-200  ml-12 rounded-2xl w-full ">
                        <div className="flex flex-col">

                            <Profile />
                            <div className="w-[70%] ml-44 ">
                                <ProfileDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </SnackbarProvider>
        </div>
    );
}

export default profile;