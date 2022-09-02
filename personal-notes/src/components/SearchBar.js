import React from "react";

function SearchBar({onSearch}){
    return(
        <div className="note-app__title">
            <h1>Note App</h1>
            <input placeholder="Anda dapat mencari note anda disini..." onChange={(event) => {onSearch(event.target.value)}}/>
        </div>
    )
}

export default SearchBar;
