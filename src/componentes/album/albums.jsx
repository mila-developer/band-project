import React from "react";

import './albums.css';
import { useState } from 'react';

// The object Albums will return the props from the bandData

const Albums = (props) => { 
    const [show, setShow] = useState(false); 
    return (
        <div>
            <div className="details">
                {props.albumprop.name}
            </div>
            <div className="details">
                {props.albumprop.year}
            </div>
            <img
            className="img" 
            src= {props.albumprop.img} 
            alt="Rihanna" 
            width="300" 
            height="300" />
            {show &&
            <div className="songs">
                {props.albumprop.songs}
            </div>
            }
            <button className="btn" 
            onClick={() => setShow(!show)}>
                show musics
            </button>
        </div>
        
    )
};

export default Albums;
