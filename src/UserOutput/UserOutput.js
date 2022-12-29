import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Username: {props.userName}</p>
            <p>There is something here too</p>
        </div>
    )
};

export default userOutput;