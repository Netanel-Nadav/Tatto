import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DynamicContent } from '../components/DynamicContent'
import { Reviews } from '../components/Reviews'
import { Artist } from '../models/Artist'
import { artistService } from '../services/artist.service'

import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'


export const ArtistDetails: React.FC = () => {
    const { id } = useParams()
    const [artist, setArtist] = useState<null | Artist>(null)


    useEffect(() => {
        getArtist()
    }, [id])


    const getArtist = async () => {
        if (!id) return
        const artist = await artistService.getById(id)
        if (!artist) return
        setArtist(artist)
    }

    if (!artist) return <div>Loading..</div>
    const { reviews, description, email, name, profileImage, location, rating, services, portfolio } = artist

    return (
        <div className="artist-details full">
            <ul className="clean-list social-media flex align-center justify-center">
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaTiktok /></li>
            </ul>
            <section title='page-header' className="page-header full main-container" style={{ backgroundImage: `url(${profileImage})` }}>
                <div className="screen full"></div>
                <div className="wrapper">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </section>
            <section title='page-main-content' className="page-main main-container">
                <DynamicContent artist={artist} />
                <Reviews reviews={reviews} />
            </section>

        </div>
    )
}
