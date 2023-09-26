import { comma } from 'postcss/lib/list';
import React from 'react';

const DetailsCard = ({ details }) => {
    const { image, title, description, price, text_and_btn_bg_color } = details;
    const handleAddToDonation = () =>{
        console.log(details);
    }



    return (
        <div className=' max-w-[1300px] mx-auto p-14 relative'>
            <img className='w-[1200px] h-[500px] rounded-lg' src={image} alt="" />
            <div>
                <button onClick={handleAddToDonation} style={{ backgroundColor: `${text_and_btn_bg_color}` }} className='px-5 py-2 rounded-md text-white text-xl font-medium absolute lg:bottom-60 lg:left-20  md:bottom-48 md:left-20 bottom-[265px] left-16'>Donate {price}</button>
            </div>
            <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold mt-6'>{title}</h1>
            <p className='lg:text-base text-sm font-normal text-gray-500 mt-2'>{description}</p>
        </div>
    );
};

export default DetailsCard;