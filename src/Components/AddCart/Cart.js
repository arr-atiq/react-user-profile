import React from 'react';
import './cart.css';

const Cart = (props) => {
    const myCart = props.addCart;
    let totalSalary = 0;
    for (let i = 0; i < myCart.length; i++) {
        const getCart = myCart[i];
        totalSalary = totalSalary + getCart.salary;
        
    }
    return (
        <div className="cart-user">
            <h2>Added User Summery</h2>
            <h3>Total Added Users: {myCart.length}</h3>
            <h3>Total Salary: ${totalSalary}</h3>
        </div>
    );
};

export default Cart;