import React from 'react';
import './SearchForm.css'

function SearchForm({handleChange, handleSubmit, searchString}) {
    return (
        <form className='hunter-search-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='e.g. naruto' onChange={handleChange} value={searchString} required/>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;