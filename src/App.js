import './App.css';
import { ProductList } from './components/ProductList';
import { productData } from './products';
import { ProductPage } from './components/ProductPage';


import { Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductList products={productData.products}/>} />
    <Route path="products">
       <Route path=":productId" element={<ProductPage />} />
       </Route>
  </Routes>
);



function App() {

  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
