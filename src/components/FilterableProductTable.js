import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function FilterableProductTable(){

    return(
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar />
      <ProductTable/>
    </div>
    );
}

export default FilterableProductTable;