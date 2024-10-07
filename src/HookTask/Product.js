// import React from 'react'

// const Product = () => {

//     const data = [
//         { id: 1, name: "Product 1" },
//         { id: 2, name: "Product 2" },
//         { id: 3, name: "Product 3" },
//         { id: 4, name: "Product 4" },
//         { id: 5, name: "Product 5" }
//     ]

//     return (
//         <div className='container d-flex gap-5'>
//             {
//                 data.map((item, index) => {
//                     return (
//                         <div className='mt-5'>
//                             <h2>{item.name}</h2>
//                             <button className='btn btn-primary' >Add To Cart</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Product




// src/Product.js
import React, { useContext } from 'react';
import { CartContext } from '../App';

const Product = () => {
    const data = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
        { id: 5, name: "Product 5" }
    ];

    // Use the CartContext
    const { cart, addToCart, getTotalItems } = useContext(CartContext);

    return (
        <div className='container'>
            <h1>Products</h1>
            <div className='d-flex gap-5'>
                {data.map((item) => {
                    return (
                        <div className='mt-5' key={item.id}>
                            <h2>{item.name}</h2>
                            <button 
                                className='btn btn-primary' 
                                onClick={() => addToCart(item.id)}
                            >
                                Add To Cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Product;
