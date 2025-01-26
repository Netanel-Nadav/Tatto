import React, { useRef, useEffect, useState } from 'react'
import { Artist } from '../models/Artist'

interface IProps {
    artists: Artist[]
}

export const ImgSlider: React.FC<IProps> = ({ artists }) => {

    const [dotsNumber, setDotsNumber] = useState<number | null>(null)
    const [translate, setTranslate] = useState(0)
    const sliderWidth = useRef(1270)
    const [selectedDot, setSelectedDot] = useState(0)


    useEffect(() => {
        let intervalId: any;
        calcDots()

        
        // setInterval(() => {
        //     if(!dotsNumber) return
        //     if (selectedDot >= dotsNumber) setSelectedDot(prevSelectedDot => prevSelectedDot = 0)
        //     intervalId = setSelectedDot(prevSelectedDot => prevSelectedDot + 1)
        // }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [artists, dotsNumber])


    const calcDots = () => {
        if (!artists) return
        const dots = Math.round(artists.length / 3)
        setDotsNumber(dots)
    }


    const moveSlider = (idx: number) => {
        setSelectedDot(idx)
        switch (idx) {
            case 0:
                setTranslate(0)
                break;
            case 1:
                setTranslate(-sliderWidth.current)
                break;
            default:
                setTranslate(-sliderWidth.current * idx)
                break;
        }
    }

    if (!artists || !dotsNumber) return <h2>Loading..</h2>
    return (
        <section className="img-slider main-container">
            <h2>Some of the Best Works</h2>
            <div className="slider-container flex">
                <ul className="slider-wrapper clean-list" style={{ translate: translate }} >
                    {artists.map(art => (
                        <li className="slider-card" key={art._id}>
                            <div className="info flex align-center justify-center column">
                                <p>{art.name}</p>
                                <ul className='flex clean-list g-1 wrap justify-center'>
                                    {art.services.map(service => <li>{service}</li>)}
                                </ul>
                            </div>
                            <img src={art.portfolio[Math.floor(Math.random() * art.portfolio.length)]} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
            <ul className='clean-list flex g-1 dots-container'>
                {artists.slice(0, dotsNumber).map((art, idx) =>
                    <li className={`${selectedDot === idx ? "active" : ""}`} key={art._id}>
                        <button onClick={() => moveSlider(idx)}>
                            &bull;
                        </button>
                    </li>)}
            </ul>
        </section>
    )
}
