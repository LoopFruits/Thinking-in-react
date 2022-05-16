import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



function FilterableProductTable({products}){
    const [search, setSearch] = useState("Football")

    return(
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar search = {search} />
      <ProductTable product={products} search={search} />
    </div>
    );
}

export default FilterableProductTable;