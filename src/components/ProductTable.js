import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';



function ProductTable(){

    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
        <ProductCategoryRow category="Sporting Goods" />
        <ProductRow name="Football" stocked={true} price={49.99} />
        <ProductRow name="Baseball" stocked={true} price={9.99} />
        <ProductRow name="Basketball" stocked={false} price={29.99} />
        <ProductCategoryRow category="Electronics" />
        <ProductRow name="iPod Touch" stocked={true} price={49.99} />
        <ProductRow name="iPhone 5" stocked={false} price={9.99} />
        <ProductRow name="Nexus 7" stocked={true} price={29.99} />
          </tbody>
        </table>
      )
    }
    
export default ProductTable;