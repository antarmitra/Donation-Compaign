import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findDetails = cards?.find(details => details.id == id);
        setDetails(findDetails);
    }, [id, cards])
    console.log(details);

    return (
        <div>
           <DetailsCard details = {details}></DetailsCard>
        </div>
    );
};

export default Details;
