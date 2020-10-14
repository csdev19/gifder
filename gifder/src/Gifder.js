import React from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GifPresenter } from './components/GifPresenter/GifPresenter';


export const Gifder = () => {

  return (
    <div className="App">
      <Header />
      <GifPresenter />
      <Footer />
    </div>
  );
}
