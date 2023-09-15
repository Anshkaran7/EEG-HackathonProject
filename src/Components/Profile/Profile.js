
import { CameraIcon } from "@heroicons/react/24/outline";
import { Snackbar } from "@mui/material";
import Image from "next/image";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useState, useRef } from "react";

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleCameraIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setSelectedImage(imageUrl); // Update the selected image URL
            enqueueSnackbar("Image uploaded successfully", { variant: "success" }); // Show a success snackbar
        }
    };

    const handleRemoveButtonClick = () => {
        setSelectedImage("/assets/profile.jpeg"); // Reset the selected image to the default image source
        enqueueSnackbar("Image removed successfully", { variant: "success" }); // Show a success snackbar
    };


    return (
        <div className="flex flex-row">
            <SnackbarProvider maxSnack={3}>
                <div className='relative ml-32 mt-10'>
                    <Image
                        src={selectedImage || "/assets/profile.jpeg"} // Use selectedImage or a default image source
                        alt="doctor"
                        className="rounded-full w-24 border-4 border-gray-200 h-24"
                        width={500}
                        height={500}
                    />
                    <div className='absolute left-16 bottom-0 p-1 rounded-full bg-red-400'>
                        <CameraIcon
                            className='h-4  w-4  text-white cursor-pointer'
                            onClick={handleCameraIconClick}
                        />
                    </div>
                </div>
                {/* Hidden file input for uploading */}
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                />
                <div className="gap-x-6 flex flex-row ml-24 mt-16">
                    <button onClick={handleCameraIconClick} className='h-12 w-auto bg-theme-blue shadow-md text-white px-10 py-2 rounded-lg'>Upload</button>

                    <button onClick={handleRemoveButtonClick} className='h-12 w-auto bg-white  shadow-md border-2 border-gray-200 text-theme-purple-1 px-10 py-2 rounded-lg'>Remove</button>
                </div>
            </SnackbarProvider>
        </div>
    );
}

export default Profile;