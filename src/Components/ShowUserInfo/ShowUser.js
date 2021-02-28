import React from 'react';
import './ShowUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen, faEnvelope, faFunnelDollar, faPhoneAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const ShowUser = (props) => {
    const {name, email, phone, image, salary} = props.getUser;
    return (
        <div className="show-user">
            <div className="showInfo">
                <h4><FontAwesomeIcon icon={faChessQueen} /> {name}</h4>
                <h4><FontAwesomeIcon icon={faEnvelope} /> {email}</h4>
                <h4><FontAwesomeIcon icon={faPhoneAlt} /> {phone}</h4>
                <h4><FontAwesomeIcon icon={faFunnelDollar} /> {salary}</h4>
                <button className="main-button"><FontAwesomeIcon icon={faUserPlus} /> Add Me</button>
            </div>
            <div className="imgPart">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default ShowUser;