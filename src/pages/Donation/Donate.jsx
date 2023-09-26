import React from 'react';

const Donate = ({ details }) => {
    const { image, category, title, price, text_and_btn_bg_color, card_bg_color, category_bg_color } = details;
    return (
        <div>
            <div className="card card-side shadow-xl " style={{ backgroundColor: `${card_bg_color}` }}>
                <div>
                    <img className='w-80 lg:h-60 md:h-60 h-80' src={image} alt="" />
                </div>
                <div className="card-body">
                    <div className="mb-2 flex items-center justify-between w-20">
                        <p style={{ backgroundColor: `${category_bg_color}`, color: `${text_and_btn_bg_color}` }} className="block font-sans text-base font-medium rounded-md px-4 py-1 leading-relaxed antialiased opacity-100">
                            {category}
                        </p>
                    </div>
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className=' text-lg font-semibold' style={{ color: `${text_and_btn_bg_color}` }}>{price}</p>
                    <div className='w-36 rounded-md' style={{ backgroundColor: `${text_and_btn_bg_color}` }}>
                        <button className='px-5 py-2 rounded-md text-white font-medium '>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;

