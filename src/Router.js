import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';
import MyWediya from './pages/myWediya/myWediya';
import Scroll from './components/Scroll/Scroll';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/review" element={<Review />} />
        <Route path="/mywediya" element={<MyWediya />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
