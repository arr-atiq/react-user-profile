import React, { useState } from 'react';
import './UserInformation.css';
import fakeData from '../../fakeData/data';
import ShowUser from '../ShowUserInfo/ShowUser';
import Cart from '../AddCart/Cart';

const UserInformation = () => {
    const first15 = fakeData;
    const [users, setUsers] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddUser = (addUser) =>{
        const newCart = [...cart, addUser];
        setCart(newCart);
    }
    return (
        <div className="user-information">
            <ul>
                {
                    users.map(user => <ShowUser 
                        handleAddUser = {handleAddUser}
                        getUser = {user}
                    ></ShowUser>)
                }
            </ul>
            <div className="cart-part">
                <Cart addCart = {cart}></Cart>
            </div>
        </div>
    );
};

export default UserInformation;