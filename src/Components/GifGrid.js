import { findByDisplayValue } from '@testing-library/dom';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../Helpers/getGifs';
import GifGridItem from "./GifGridItem";
import ReactSpeedometer from "react-d3-speedometer";
import { useState } from 'react';

const GifGrid = ({ category }) => {
  //const [images, setImages] = useState([]);

  const { data, loading } = useFetchGifs(category);
  const [inputValue, setInputValue] = useState(24);

  const handleOnSelect = (e) => {
    setInputValue(e.target.value);
  }
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
