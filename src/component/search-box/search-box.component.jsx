import React from 'react';

import '/Users/dpthynair/monsters-rolodex/src/component/search-box/search-box.styles.css';


export const SearchBox = ({ placeholder,handlechange}) => (
    
    <input className = 'search'
    type = 'search'
    placeholder = {placeholder}
    onChange = {handlechange}
    />
);