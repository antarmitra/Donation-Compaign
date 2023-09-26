import React, { useEffect, useState } from 'react';
import Donate from './Donate';


const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noData, setNoData] = useState("");
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));

        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoData("No Data Found")
        }
    }, []);

    console.log(donation);

    const handleRemove = () => {
        localStorage.clear();
        setDonation([]);
        setNoData("No Data Found")
    }



    return (
        <div className='max-w-[1300px] mx-auto'>



            {noData ? <p className='h-[60vh] flex justify-center items-center text-3xl font-semibold'>{noData}</p>
                :
                <div>
                    {donation.length > 0 && <button onClick={handleRemove} className='px-5 py-3 text-white bg-[#009444] block mx-auto text-xl font-semibold rounded-md'>Deleted All Donation</button>}

                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-10'>
                        {donation.slice(0, dataLength).map(details => <Donate key={details.id} details={details}></Donate>)}
                    </div>

                    <div className='text-center mt-10'>
                        <div className={dataLength === donation.length && 'hidden'} >
                            <button onClick={() => setDataLength(donation.length)} className='px-5 py-3 text-white bg-[#009444] block mx-auto text-xl font-semibold rounded-md'>See All</button>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Donation;