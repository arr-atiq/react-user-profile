import React, { useState } from 'react';
import './UserInformation.css';
import fakeData from '../../fakeData/data';
import ShowUser from '../ShowUserInfo/ShowUser';

const UserInformation = () => {
    const first15 = fakeData;
    const [users, setUsers] = useState(first15);
    return (
        <div className="user-information">
            <ul>
                {
                    users.map(user => <ShowUser getUser = {user}></ShowUser>)
                }
            </ul>
            <div className="cart-part">
                <h2>Count Me Cart</h2>
            </div>
        </div>
    );
};

export default UserInformation;