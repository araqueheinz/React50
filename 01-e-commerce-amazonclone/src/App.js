import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen/CheckoutScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/checkout" element={<CheckoutScreen/>} exact />
          <Route path="/login" element={<LoginScreen/>} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
