import { useEffect, useRef, useState } from "react";
import Label from "../Label";
import { enqueueSnackbar, SnackbarProvider } from "notistack";


const ProfileDetails = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const dropdownRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);


    const handleMobileNoChange = (event, setMobileNo) => {
        if (event.target) {
            const newValue = event.target.value;

            console.log('Input value:', newValue); // Add this line

            if (/^\d*$/.test(newValue)) {
                if (newValue.length <= 10 || newValue === '') {
                    if (/^[1-9]/.test(newValue) || newValue === '') {
                        console.log('Setting mobile number:', newValue); // Add this line
                        setMobileNo(newValue);
                    } else {

                        enqueueSnackbar('Mobile number should not start with digits 1 to 5.', { variant: 'error' })
                    }
                } else {

                    enqueueSnackbar('Mobile number should be a maximum of 10 digits.', { variant: 'error' })
                }
            } else {

                enqueueSnackbar('Please enter only numbers.', { variant: 'error' })
            }
        }
    };

    // form accessiblity
    const handleKeyDown = (e) => {
        if (isEditing) {

            if (e.key === 'Enter' || e.key === 'Return') {
                const form = e.target.form;
                if (form) {
                    const index = Array.prototype.indexOf.call(form.elements, e.target);
                    if (form.elements[index + 1]) {
                        form.elements[index + 1].focus();
                        e.preventDefault();
                    }
                }
            }

            // for down arrow 
            if (e.key === "ArrowDown") {
                const form = e.target.form;
                if (form) {
                    const index = Array.prototype.indexOf.call(form.elements, e.target);
                    if (form.elements[index + 1]) {

                        form.elements[index + 1].focus();
                        e.preventDefault();
                    }
                }
            }

            // for up arrow
            if (e.key === "ArrowUp") {
                const form = e.target.form;
                if (form) {
                    const index = Array.prototype.indexOf.call(form.elements, e.target);
                    if (form.elements[index - 1]) {

                        form.elements[index - 1].focus();
                        e.preventDefault();
                    }
                }
            }
        }
    }
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveChangesClick = () => {
        // Validate and save the edited profile data
        if (!validateEmail(email)) {
            enqueueSnackbar("Please enter a valid email address.", { variant: "error" });
            return;
        }
        setIsEditing(false);
        enqueueSnackbar("Profile updated successfully", { variant: "success" });
    };


    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    return (
        <SnackbarProvider maxSnack={3}>
            <div className="mx-24 my-12 items-center">
                <div className="flex justify-between gap-x-10 mt-5">
                    <div className="w-full">
                        <Label text="Full Name" />
                        <input
                        className="p-2 w-full bg-transparent border-gray-300 text-theme-gray-dark font-semibold placeholder:font-light duration-150 border-[3px]  rounded-lg outline-none focus:bg-theme-purple-light focus:border-theme-purple-1"
                            type="text"
                            name="Name"
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="w-full">
                        <Label text="Phone Number" />
                        <input
                            className="p-2 w-full bg-transparent border-gray-300 text-theme-gray-dark font-semibold placeholder:font-light duration-150 border-[3px]  rounded-lg outline-none focus:bg-theme-purple-light focus:border-theme-purple-1"

                            type="number"
                            name="Number"
                            onKeyDown={handleKeyDown}
                            onChange={(e) => handleMobileNoChange(e, setNumber)}
                            value={number}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="flex justify-between gap-x-10 mt-5">
                    <div className="w-full">
                        <Label text="Email" />
                        <input
                            className="p-2 w-full bg-transparent border-gray-300 text-theme-gray-dark font-semibold placeholder:font-light duration-150 border-[3px]  rounded-lg outline-none focus:bg-theme-purple-light focus:border-theme-purple-1"
                            type="email"
                            name="email"
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                

                <div className="flex justify-end">
                    {isEditing ? (
                        <button
                            onClick={handleSaveChangesClick}
                            className="h-12 w-auto bg-theme-green-1 shadow-md text-white px-12 py-2 rounded-lg mt-10"
                        >
                            Save Changes
                        </button>
                    ) : (
                        <button
                            onClick={handleEditClick}
                            className="h-12 w-auto bg-theme-blue shadow-md text-white px-12 py-2 rounded-lg mt-10"
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </SnackbarProvider>
    );
};

export default ProfileDetails;