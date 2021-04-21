import { findByDisplayValue } from '@testing-library/dom';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../Helpers/getGifs';
 import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    //const [images, setImages] = useState([]);

    const {data, loading} = useFetchGifs(category);

    return (
        <>
         <h3>Category</h3>

         {loading && <p className="flash">Loading...</p>}
         <div className="card-grid">
            {
                data.map(img => {
                    return <GifGridItem
                        key={img.id}
                        {...img}
                    />
                })
            }
        </div>
        </>
    )
}

export default GifGrid
