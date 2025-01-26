import React from 'react'
import { AccordionPanel } from './AccordionPanel'

interface IProps {
    portfolio: string[]
}

export const Accordion: React.FC<IProps> = ({ portfolio }) => {
    return (
        <section className="accordion flex">
            {portfolio.slice(0, 5).map(img => (
                <AccordionPanel key={img} img={img} />
            ))}
        </section>
    )
}
