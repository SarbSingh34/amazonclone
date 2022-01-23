import React, { Component } from 'react';
import Mainpagestyle from "./Mainpagestyle.css";
import Advertisement from "./Advertisement";
import Advertisementimgdivide from './Advertisementimgdivide';


export default class Mainpage extends 
Component {
    render() 
  {
    return (
            <div className='mainpagecarousel' >
                  <div className='mainpage' 
         style = {{paddingTop:'22%',display:'flex',justifyContent:'space-evenly', flexWrap:'wrap'}}>
                    <Advertisement />
                    <Advertisement />
                    <Advertisement />
                    <Advertisement />
                    
                    <Advertisementimgdivide /> 
                    <Advertisementimgdivide /> 
                    <Advertisementimgdivide /> 
                    <Advertisementimgdivide /> 
                    
                 </div>
            </div> 
         );
  }
}
