import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable';
import {products} from "./data"


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FilterableProductTable/>
      </header>
    </div>
  );
}

ReactDOM.render(<FilterableProductTable products={products} />, document.getElementById('root'));

export default App;
 
