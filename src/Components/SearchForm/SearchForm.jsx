import React from 'react';

function SearchForm({handleChange, handleSubmit, searchString}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='e.g. naruto' onChange={handleChange} value={searchString}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default SearchForm;