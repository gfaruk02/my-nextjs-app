"use client"
import React, { useState } from 'react';

const Counter = () => {
        const [counter, setCounter]= useState(0)
        return (
            <div>
        <h1> counter: {counter}</h1>
          <button className="btn p-2 ml-5 border border-black"
          onClick={()=> setCounter(counter + 1)}
          > Increase </button>
          <button className="btn p-2 ml-5 border border-black"
          onClick={()=> setCounter(counter - 1)}
          > Decrease</button>
            </div>
        );
};

export default Counter;