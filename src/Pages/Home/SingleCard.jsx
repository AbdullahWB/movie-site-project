import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ show }) => {
    const { image, id, averageRuntime, name, language, summary } = show;

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-full object-cover' src={image.medium} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex gap-10'>
                        <p>Movie Duration: {averageRuntime}</p>
                        <p>Language: {language}</p>
                    </div>
                    <p>{summary.length < 250 ? <>{summary}</> : <>{summary.slice(0, 250)} .... <Link to={`/details/${id}`} className='btn btn-link'>Read More</Link> </>}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${id}`} className="btn btn-primary">show Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;