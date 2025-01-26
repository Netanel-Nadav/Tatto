import axios from "axios"
import { asyncStorage } from "./asyncStorage"

const STORAGE_KEY = 'artists'


const axiosConfig = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,
    withCredentials: true
})

const query = async () => {
    // const artists = await asyncStorage.query(STORAGE_KEY)
    const { data } = await axiosConfig.get('artist')
    return data
}

const getById = async (id: string) => {
    const { data } = await axiosConfig.get(`artist/${id}`)
    return data
}

export const artistService = {
    query,
    getById
}