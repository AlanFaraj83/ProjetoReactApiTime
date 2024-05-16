import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './components/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
   <Clock country= "br"/>
);
