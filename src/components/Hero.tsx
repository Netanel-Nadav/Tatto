

import { useNavigate } from 'react-router-dom'
import img from '../assets/imgs/SmilingTattoo.png'
import { Button } from './Button'

export const Hero = () => {

    const navigate = useNavigate()

    return (
        <section className="hero main-container">
            <div className="screen full"></div>
            <div className="wrraper flex align-center">
                <div className="info">
                    <h1> Your new <span> tatto</span> starts here</h1 >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est ullam aut eos fugit pariatur, eaque cupiditate beatae sequi iure.</p>
                    <Button onClick={() => navigate('/explore')}>
                        <p>Explore some ideas</p> 
                    </Button>
                </div>
                <div className="img-container">
                    <img src={img} alt="mpdel" />
                </div>
            </div>
        </section>
    )
}
