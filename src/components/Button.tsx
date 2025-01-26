import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='styled-btn'>
            <span></span>
            {children}
            <span></span>
        </button>
    )
}
