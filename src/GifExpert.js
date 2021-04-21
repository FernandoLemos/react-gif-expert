import React, {useState} from 'react';
import  CategoryAdd from "./Components/CategoryAdd";
import  GifGrid from "./Components/GifGrid";

const GifExpert = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <>
            <h2>GifExpert</h2>
            <CategoryAdd setCategories={setCategories}/>
            <hr />

            <ul>
                {
                    categories.map((item, i) => 
                        <GifGrid 
                        key = {item}
                        category ={item}/>
                    )
                }
            </ul>
        </>
    );
}

export default GifExpert;
