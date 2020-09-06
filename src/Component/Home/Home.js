
import React, { useState, useEffect } from 'react';
import PostCart from '../PostCart/PostCart';

const Home = () => {
    const[cart,setCart]=useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response =>response.json())
        .then((data) =>setCart(data));

    },[])
    
    return (
        <div>
           {
            cart.map((cart) =><PostCart cart={cart} key={cart.id}></PostCart>)
           }
            
        </div>
    );
};

export default Home;