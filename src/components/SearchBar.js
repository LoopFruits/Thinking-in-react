import React from "react";


function SearchBar({search, showStocked, onSearchChange, onStockedChange}){


    return (
        <form  
            style={{ padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column" }}> 

            <input type="text" 
            placeholder="Search..." 
            value = {search} 
            onChange={e => onSearchChange(e.target.value)}
            />
            <input type="checkbox" 
            placeholder="Search..." 
            checked = {showStocked} 
            onChange={e => onStockedChange(e.target.checked)}
            />
                <label>
                    <input type="checkbox"  checked = {showStocked}/>
                    Only show products in stock 
                </label>
        </form>
    );
}


export default SearchBar;