
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const handleSelectChange = (e) => {
        setIsLoading(true)
        getGifs(category, e.target.value).then((data) => {
            setImages(data);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        getGifs(category).then((data) => {
            setImages(data);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return {
        handleSelectChange,
        images,
        isLoading
    }
}

export default useFetchGifs