import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



function FilterableProductTable({products}){
    const [search, setSearch] = useState("")
    const [showStocked, setShowStocked] =useState("")

    function handleSearchChange(newSearch){
      //updates state 
      setSearch(newSearch)
    }
    return(
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar search = {search} showStocked={showStocked} onSearchChange={handleSearchChange} onStockedChanged={setShowStocked}/>
      <ProductTable product={products} search={search} showStocked = {showStocked}/>
    </div>
    );
}

export default FilterableProductTable;