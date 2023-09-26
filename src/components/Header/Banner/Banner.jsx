import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-fit">
                <img src="/src/assets/image/Rectangle 4281.png" alt="" />
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="lg:mb-5 lg:text-4xl md:text-3xl text-xl font-bold text-black ">I Grow By Helping People In Need</h1>
                        <div className='p-5'>
                            <input type="text" placeholder="Search here....." className=" py-3 px-5 rounded-lg lg:w-full max-w-xs text-black" />
                            <button className="bg-[#FF444A] text-white py-3 px-5 rounded-e-md  text-[16px]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;