import React from 'react'
import { Review } from '../models/Review'

interface IProps {
    reviews: Review[]
}

export const Reviews: React.FC<IProps> = ({ reviews }) => {
    console.log(reviews);
    
    return (
        <section className="reviews">
            <button>Add Review</button>
        </section>
    )
}
