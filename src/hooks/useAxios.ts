import React, { useEffect, useState } from 'react'
import axios from 'axios'

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,
    withCredentials: true
})


export const useAxios = (url: string, method: string = "GET") => {

    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        switch (method) {
            case "GET":
                get()
                break;
            case "POST":
                post()
                break;
        
            default:
                break;
        }
    }, [])



    const get = async () => {
        try {
            setIsLoading(true)
            const data = await instance.get(url)
            setData(data)
            setIsLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    const post = async () => {
        try {
            setIsLoading(true)
            const data = await instance.get(url)
            setData(data)
            setIsLoading(false)
        } catch (err) {
            console.log(err);
        }
    }






    return { data, isLoading }
}
