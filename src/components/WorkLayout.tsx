import React from 'react'

interface IProps {
    portfolio: string[]
}

export const WorkLayout: React.FC<IProps> = ({ portfolio }) => {
    return (
        <div className="work-imgs">
            {portfolio.map(pic => (
                <div className="img-container" key={pic}>
                    <img src={pic} alt="artist work" loading='lazy' />
                </div>
            ))}
        </div>
    )
}
