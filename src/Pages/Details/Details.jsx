import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    const { id } = useParams();

    const ShowDetails = details.find(show => show.show.id == id);
    console.log(ShowDetails);

    const {summary, premiered, officialSite, name, language, image, genres, averageRuntime} = (ShowDetails.show) || {}

    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                <div>
                    <img className='h-[600px] rounded-lg ' src={image.original} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl'>Movie Name: {name}</h1>
                    <p className='text-xl'>Language: {language}</p>
                    <p className='flex gap-4 text-xl'>Genres: {genres.map((gn, index) => <p key={index}>{gn}</p>)}</p>
                    <p className='text-xl'>Duration Of movie: {averageRuntime}min</p>
                    <p className='text-xl'>Movie Premiered: {premiered}</p>
                    <p className='text-xl'>Official site: {officialSite}</p>
                    <p className='text-xl'>Movie Summary: {summary}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;