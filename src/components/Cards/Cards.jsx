import React from 'react';
import Card from './Card';

const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto mb-10'>
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;