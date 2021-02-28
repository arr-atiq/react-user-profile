import React from 'react';
import './cart.css';

const Cart = (props) => {
    const myCart = props.addCart;
    let totalSalary = 0;
    let totalImage = [];
    for (let i = 0; i < myCart.length; i++) {
        const getCart = myCart[i];
        totalSalary = totalSalary + getCart.salary;
        totalImage =  getCart.image;
        
    }
    return (
        <div className="cart-user">
            <h2>Added User Summery</h2>
            <h3>Total Added Users: {myCart.length}</h3>
            <h3>Total Salary: ${totalSalary}</h3>
            <li>
                <img src={totalImage} alt=""/>
            </li>
            
        </div>
    );
};

export default Cart;