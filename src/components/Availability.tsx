
import React from 'react'

interface IProps {
    availability: Date[]
}

export const Availability: React.FC<IProps> = ({ availability }) => {


    const formatDate = (date: Date) => {
        console.log(date);
        
    }

    console.log(availability);
    
    return (
        <section className="availability">
            {availability.map(time => (
                <p key={time.toLocaleString()}>{time.toLocaleString()}</p>
            ))}
        </section>
    )
}
