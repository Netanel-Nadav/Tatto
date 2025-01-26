import React, { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'


interface IProps {
    location: {
        lat: number,
        lon: number,
        city: string,
        country: string,
    }
}

export const LocationMap: React.FC<IProps> = ({ location }) => {
    const { lat, lon, city, country } = location
    const { data, isLoading } = useAxios(`artist/getLocation?lat=${lat}&lon=${lon}`)


    if (isLoading || !data) return <h1>Loading..</h1>
    return (
        <div className="location-map">
            <p className='text-center fs-2'>{city}, {country}</p>
            <div className="map-container">
                <img src={data.data} alt="artist location" />
            </div>
        </div>
    )
}
