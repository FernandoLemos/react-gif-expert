import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length>0){
            setCategories(categories=> [inputValue, ...categories]);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
        </form>
    )
}
CategoryAdd.propTypes ={
    setCategories: PropTypes.func.isRequired
}

export default CategoryAdd
