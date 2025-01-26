import React, { useState } from 'react'
import { Artist } from '../models/Artist'
import { WorkLayout } from './WorkLayout'
import { ContactArtist } from './ContactArtist'
import { LocationMap } from './LocationMap'


// ICONS
import { AiOutlinePicture } from 'react-icons/ai'
import { FaRegComments } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { MdEventAvailable } from 'react-icons/md'
import { Availability } from './Availability'


interface IProps {
    artist: Artist
}


export const DynamicContent: React.FC<IProps> = ({ artist }) => {

    const [contentToShow, setContentToShow] = useState(1)
    const { reviews, description, email, name, profileImage, location, rating, services, portfolio, availability } = artist

    return (
        <section className="dynamic-content">
            <ul className="clean-list flex g-2 justify-center">
                <li><button className={contentToShow === 1 ? 'active' : ''} onClick={() => setContentToShow(1)}><AiOutlinePicture /></button></li>
                <li><button className={contentToShow === 2 ? 'active' : ''} onClick={() => setContentToShow(2)}><FaRegComments /></button></li>
                <li><button className={contentToShow === 3 ? 'active' : ''} onClick={() => setContentToShow(3)}><GoLocation /></button></li>
                <li><button className={contentToShow === 4 ? 'active' : ''} onClick={() => setContentToShow(4)}><MdEventAvailable /></button></li>
            </ul>
            {contentToShow === 1 && <>
                <h2>My Work</h2>
                <WorkLayout portfolio={portfolio} />
            </>
            }
            {contentToShow === 2 && <>
                <h2>Contact {name}</h2>
                <ContactArtist email={email} />

            </>
            }
            {contentToShow === 3 && <>
                <h2>Location</h2>
                <LocationMap location={location} />
            </>
            }
            {contentToShow === 4 && <>
                <h2>Availability</h2>
                <Availability availability={availability} />
            </>
            }
        </section>
    )
}
