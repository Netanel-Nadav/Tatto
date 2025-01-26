import React, { useEffect, useRef } from 'react'
import { FaExpand } from 'react-icons/fa'


interface IProps {
    img: string
}

export const AccordionPanel: React.FC<IProps> = ({ img }) => {

    const panelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.querySelector('.accordion-panel')?.setAttribute("aria-expanded", "true")
    }, [])


    const handleClick = () => {
        const clickedPanel = panelRef.current;
        const panels = document.querySelectorAll('.accordion-panel');
        panels.forEach(panel => panel.setAttribute("aria-expanded", "false"))
        clickedPanel?.setAttribute("aria-expanded", "true")
    }

    return (
        <div className="accordion-panel" aria-expanded="false" ref={panelRef}>
            <img src={img} alt="work" />
            <button className='panel-trigger' onClick={handleClick}>
                <FaExpand />
            </button>
        </div>
    )
}
