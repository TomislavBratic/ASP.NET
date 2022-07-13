
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Header from './containers/Header.js';
import ProductListing from './containers/ProductListing.js';
import ProductDetail from './containers/ProductDetail.js';
import ProductComponent from './containers/ProductComponent.js';

function App() {
  return (
   <div className='App'>
    <Router>
<Header/>
  <Routes>
    <Route path="/" element={<ProductListing/>}></Route>
    <Route path="/product/:productId" element={<ProductDetail/>}></Route>
    <Route path="/" element={<ProductComponent/>}></Route>
  </Routes>


    </Router>


   </div>
  );
}

export default App;
