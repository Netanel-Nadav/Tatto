import React from 'react'
import { Link } from 'react-router-dom'
import { Artist } from '../models/Artist'

interface Props {
    artist: Artist
}

export const ArtistPreview: React.FC<Props> = ({ artist }) => {


    const { profileImage, name, description, rating, services, _id } = artist
    return (
        <div className="artist-preview card flex column space-between">

            <div className="card-header">
                <div className="overlay"></div>
                <div className="img-container">
                    <img src={profileImage} alt={name} />
                </div>
            </div>

            <div className="card-body">
                <h2 className='name'>{name}</h2>
                <ul className='clean-list flex specalty justify-center'>
                    {services.map(s => <li key={s}>{s}</li>)}
                </ul>
                <p className='description'>{description}</p>
            </div>
            <div className="card-footer flex space-between align-center">
                <span>{rating} ⭐</span>
                <Link to={`/${_id}`}>See More</Link>
            </div>

        </div>
    )
}
