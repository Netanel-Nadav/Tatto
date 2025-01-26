import { useEffect, useState } from 'react'
import { Artist } from '../models/Artist'
import { artistService } from '../services/artist.service'
import { ArtistPreview } from './ArtistPreview'
export const ArtistList = () => {

    const [artists, setArtist] = useState<null | Artist[]>(null)

    useEffect(() => {
        loadArtist()
    }, [])

    const loadArtist = async () => {
        const artist = await artistService.query()
        setArtist(artist)
    }

    if (!artists) return <div>Loading...</div>
    return (
        <div className="artist-list main-container">
            <div className="wrraper flex">
                {artists && artists.map(artist => <ArtistPreview artist={artist} key={artist._id} />)}
            </div>
        </div>
    )
}
