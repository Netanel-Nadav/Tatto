import { Review } from "./Review"

export interface Artist {
    _id: string,
    name: string,
    email: string,
    password: string,
    description: string,
    services: string[],
    location: {
        lat: number,
        lon: number,
        city: string,
        country: string,
        address: string
    },
    portfolio: string[],
    rating: number,
    reviews: Review[],
    availability: Date[],
    profileImage: string
}