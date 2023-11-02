import React from 'react';
import { getCategories } from './fetch';
import "./App.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/Category';
import Layout from './components/layout';
import Home from './components/home';
import OrderConfirmation from './components/orderConfirmation';

function App() {

  const [categories, setCategories] = React.useState({ errorMessage: "", data: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/orderconfirmation' element={<OrderConfirmation />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path='/categories/:categoryId' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
