import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/Category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='basket' element={<Basket />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path='/categories/:categoryId' element={<Category />} />
        </Routes>
    </BrowserRouter>
);