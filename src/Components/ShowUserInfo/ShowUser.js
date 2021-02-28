import React from 'react';
import './ShowUser.css';

const ShowUser = (props) => {
    const {name, email, phone, image, salary} = props.getUser;
    return (
        <div className="show-user">
            <div className="showInfo">
                <h4>Name:{name}</h4>
                <h4>Email:{email}</h4>
                <h4>Phone{phone}</h4>
                <h4>Salary:{salary}</h4>
                <button className="main-button">Add Me</button>
            </div>
            <div className="imgPart">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default ShowUser;