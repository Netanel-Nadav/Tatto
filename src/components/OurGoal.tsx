import React from 'react'

export const OurGoal: React.FC = () => {
  return (
    <section className="our-goal main-container">
        <div className="even-columns">
            <div className="img-container">
                <img src="https://res.cloudinary.com/dvxuxsyoe/image/upload/v1675001254/p16snnofoafz5688rvfk.webp" alt="" />
            </div>
            <h3 className='flex column justify-center'>
                <span className="goal">Our Goal</span> <span className='make'>is the to make your</span> <span className='dream'>Dream</span> <span className='tattoo'>tattoo becomes true</span>
            </h3>
        </div>
    </section>
  )
}
