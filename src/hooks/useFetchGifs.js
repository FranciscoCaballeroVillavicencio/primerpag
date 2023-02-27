import { useEffect, useState } from "react";
import { getGifts  } from "../helpers/getGifs";





export const useFetchGifs = ( category ) => {
        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    getGifts(category)
    .then(newImages => setImages(newImages)); 
    setIsLoading(false);
}, [])

  return {
  images,
  isLoading,
  }
}

