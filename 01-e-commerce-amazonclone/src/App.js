import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen/CheckoutScreen';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/checkout" element={<CheckoutScreen/>} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
