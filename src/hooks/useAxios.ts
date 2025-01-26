import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Creating an axios instance
const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,  // Base URL from environment variable
    withCredentials: true  // To include credentials like cookies
});

// Custom hook for API requests
export const useAxios = (url: string, method: string = "GET", body: any = null) => {

    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Call the appropriate method based on the passed 'method'
        switch (method) {
            case "GET":
                get();
                break;
            case "POST":
                post(body);
                break;
            default:
                break;
        }
    }, [method, body]);  // Re-run effect when method or body changes

    // GET request
    const get = async () => {
        try {
            setIsLoading(true);
            setError(null);  // Reset error state before making a request
            const response = await instance.get(url);
            setData(response.data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError('Failed to fetch data');  // Provide useful error message
            console.error(err);  // Log error to console for debugging
        }
    };

    // POST request
    const post = async (body: any) => {
        try {
            setIsLoading(true);
            setError(null);  // Reset error state before making a request
            const response = await instance.post(url, body);  // POST method should send the body
            setData(response.data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError('Failed to submit data');  // Provide useful error message
            console.error(err);  // Log error to console for debugging
        }
    };

    return { data, isLoading, error };  // Returning error state as well for better UX
};
