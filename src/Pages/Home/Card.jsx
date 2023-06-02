import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const Card = () => {
    const [show, setShow] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setShow(data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(show);

    return (
        <div>
            <h1 className='text-4xl text-center font-semibold'>Your all Show in here</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
                {
                    show.map(show => <SingleCard
                        key={show.show.id}
                        show={show.show}
                    ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Card;