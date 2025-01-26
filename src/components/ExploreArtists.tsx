
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// MODELS
import { Artist } from '../models/Artist'
import { ArtistState } from '../store/reducers/ArtistSlice'
import { Accordion } from './Accordion'
import { Button } from './Button'


export const ExploreArtists: React.FC = () => {
    const navigate = useNavigate()
    const { artists }: any = useSelector((state: any) => state.artist);

    const [artistsToDisplay, setArtistToDisplay] = useState<null | Artist[]>(null)
    const [selectedArtist, setSelectedArtist] = useState<null | Artist>(null)

    // Left Panel Pagenation Configuration
    const [currPage, setCurrPage] = useState(0)
    const itemsPerPage = useRef(9)
    const [bullets, setBullets] = useState<string[] | null>(null)


    const [currArtistImgsToDisplay, setCurrArtistImgsToDisplay] = useState<null | string[]>(null)
    const [imgSelected, setImgSelected] = useState(0)


    // Right Panel Pagenation Configuration
    const [currArtistImgsPage, setCurrArtistImgsPage] = useState(0)
    const imgsPerPage = useRef(3)


    useEffect(() => {
        filterArtistsToDisplay()
        calcPagesOfArtists()
    }, [currPage, artists])


    useEffect(() => {
        sliceSelectedArtistImgs()
    }, [selectedArtist, currArtistImgsPage])



    const filterArtistsToDisplay = () => {
        if (!artists) return
        const filteredArtists = pagenation(artists)
        setArtistToDisplay(filteredArtists)
    }


    const sliceSelectedArtistImgs = () => {
        if (!selectedArtist) return
        const currArtistImgsToDisplay = selectedArtist.portfolio.slice(currArtistImgsPage * imgsPerPage.current, imgsPerPage.current + currArtistImgsPage)
        setCurrArtistImgsToDisplay(currArtistImgsToDisplay)
    }

    const pagenation = (artists: Artist[]) => {
        return artists.slice(currPage * itemsPerPage.current, itemsPerPage.current * (currPage + 1))
    }

    const calcPagesOfArtists = () => {
        if (!artists) return
        const bulletsArray = []
        const bullet = '•'
        const bullets = Math.ceil(artists.length / itemsPerPage.current)
        for (let i = 0; i < bullets; i++) {
            bulletsArray.push(bullet)
        }
        setBullets(bulletsArray)
    }

    const handleClick = (val: number) => {
        if (val === -1) {
            setCurrArtistImgsPage(prevPage => prevPage - 1)
        } else {
            setCurrArtistImgsPage(prevPage => prevPage + 1)
        }
        setImgSelected(0)
    }


    if (!artists) return <h1>Loading..</h1>

    return (
        <section className="explore-artists even-columns">


            <div className="left-side fs-3">
                <h3 className='text-center'><span>Explore</span> some Artists</h3>
                <div className="artists-grid">
                    {artistsToDisplay?.map((artist: Artist, idx: number) => (
                        <button key={idx} onClick={() => setSelectedArtist(artist)}>
                            <img src={artist.profileImage} key={idx} alt={artist.name} />
                        </button>
                    ))}
                </div>
                {bullets &&
                    <section className="bullet-choosing flex justify-center align-center">
                        {bullets.map((bullet, idx) => <div key={idx} className={`bullet ${currPage === idx ? 'active' : ""}`} onClick={() => setCurrPage(idx)}>{bullet}</div>)}
                    </section>}
            </div>



            <div className="right-side">
                {!selectedArtist && <h3>Choose Artist from the left panel</h3>}
                {selectedArtist && <div className="selected-artist">
                    <h4 className='text-center'>{selectedArtist.name}</h4>
                    <p className='desc text-center'>{selectedArtist.description}</p>
                    <ul className='clean-list flex g-1 justify-center'>
                        {selectedArtist.services.map((special, idx) => <li key={idx}>{special}</li>)}
                    </ul>
                    <Accordion portfolio={selectedArtist.portfolio} />
                    <Button onClick={() => navigate(`/${selectedArtist._id}`)}>
                        <p>Learn More</p>
                    </Button>
                </div>}
            </div>
        </section>
    )
}
