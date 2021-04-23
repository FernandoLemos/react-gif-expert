import { findByDisplayValue } from '@testing-library/dom';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../Helpers/getGifs';
 import GifGridItem from "./GifGridItem";
 import ReactSpeedometer from "react-d3-speedometer";
 import { useState } from 'react';

const GifGrid = ({ category }) => {
    //const [images, setImages] = useState([]);

    const {data, loading} = useFetchGifs(category);
    const [inputValue, setInputValue]= useState(24);

    const handleOnSelect= (e)=>{
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
        <div style={{
        width: "300px",
        height: "250px",
        background: "#EFEFEF",
        float: 'left',
        backgroundImage: "url(" + process.env.PUBLIC_URL + "/velocimetro-09.svg)",
        backgroundRepeat:'no-repeat'

      }}>
        <ReactSpeedometer
          ringWidth={0}
          fluidWidth={true}
          value={inputValue}
          needleColor="steelblue"
          needleHeightRatio={0.7}
        />
      </div>
      <div class="wrapper radioGroup">
        <div class="one"><div _ngcontent-kyn-c12="" class="radioControl ng-star-inserted" id="cuatroOcho">
          <input _ngcontent-kyn-c12="" name="periodos" type="radio" class="ng-pristine ng-valid ng-touched" onChange={handleOnSelect} value="200"/>
          <label _ngcontent-kyn-c12="" for="periodos">
            <strong _ngcontent-kyn-c12="">48</strong>
            </label>
            </div>
            </div>
        <div class="two">
          <div _ngcontent-kyn-c12="" class="radioControl ng-star-inserted" id="cuatroOcho">
            <input _ngcontent-kyn-c12="" name="periodos" type="radio" class="ng-pristine ng-valid ng-touched" onChange={handleOnSelect} value="400"/>
            <label _ngcontent-kyn-c12="" for="periodos"><strong _ngcontent-kyn-c12="">48</strong>
            </label>
            </div>
            </div>
        <div class="three">
          <div _ngcontent-kyn-c12="" class="radioControl ng-star-inserted" id="cuatroOcho">
            <input _ngcontent-kyn-c12="" name="periodos" type="radio" class="ng-pristine ng-valid ng-touched" onChange={handleOnSelect} value="600"/>
            <label _ngcontent-kyn-c12="" for="periodos">
              <strong _ngcontent-kyn-c12="">48</strong></label>
              </div>
              </div>
        <div class="four">
          <div _ngcontent-kyn-c12="" class="radioControl ng-star-inserted" id="cuatroOcho">
            <input _ngcontent-kyn-c12="" name="periodos" type="radio" class="ng-pristine ng-valid ng-touched" onChange={handleOnSelect} value="800"/>
            <label _ngcontent-kyn-c12="" for="periodos">
              <strong _ngcontent-kyn-c12="">48</strong>
              </label>
              </div>
        </div>
      </div>
        </>
    )
}

export default GifGrid
