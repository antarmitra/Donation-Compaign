import React from 'react';
import swal from 'sweetalert';
import { AbortedDeferredError } from 'react-router-dom';

const DetailsCard = ({ details }) => {
    const { id, image, title, description, price, text_and_btn_bg_color } = details;



    const handleAddToDonation = () => {

        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'));

        if (!donationItems) {
            addedDonationArray.push(details);
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Donation Successfully!", "success");
        }
        else {
            const isExists = donationItems.find(details => details.id === id);

            if (!isExists) {
                addedDonationArray.push(...donationItems, details)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                swal("Good job!", "Donation Successfully!", "success");
            }
            else{
                swal("Error!", "This has already been donated!", "error");
            }
        }
    }

    return (
        <div className=' max-w-[1300px] mx-auto p-14 relative'>
            <img className='w-[1200px] h-[500px] rounded-lg' src={image} alt="" />
            <div className='absolute lg:bottom-60 left-20 md:bottom-60 bottom-80'>
                <button onClick={handleAddToDonation} style={{ backgroundColor: `${text_and_btn_bg_color}` }} className='px-5 py-2 rounded-md text-white text-xl font-medium'>Donate {price}</button>
            </div>
            <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold mt-6'>{title}</h1>
            <p className='lg:text-base text-sm font-normal text-gray-500 mt-2'>{description}</p>
        </div>
    );
};

export default DetailsCard;
