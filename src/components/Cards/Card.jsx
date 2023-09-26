import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, image, title, category, category_bg_color, card_bg_color, text_and_btn_bg_color } = card;


    return (
        <Link to={`/cards/${id}`}>
            <div className='mt-20'>
                <div style={{ backgroundColor: `${card_bg_color}` }} className="relative lg:mx-0 md:mx-8 mx-16 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mt-4overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img className='w-80 h-40'
                            src={image}
                        />
                    </div>
                    <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                            <p style={{ backgroundColor: `${category_bg_color}`, color: `${text_and_btn_bg_color}` }} className="block font-sans text-base font-medium rounded-md px-4 py-1 leading-relaxed text-blue-gray-900 antialiased opacity-100">
                                {category}
                            </p>
                        </div>
                        <p style={{ color: `${text_and_btn_bg_color}` }} className="block font-sans text-xl font-semibold leading-normal text-gray-700 antialiased opacity-75">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
