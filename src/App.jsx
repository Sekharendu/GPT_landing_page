import { useState } from 'react'
import {Brand,CTA,Navbar} from './components';
import React from 'react'
import {Blog,Feature,Footer,Header,Possibility,What} from './containers'
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <What/>
        <Feature/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App