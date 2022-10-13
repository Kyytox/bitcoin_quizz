
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function ButtonPlay() {

    return (
        <div className='App-main-div-create-session' >
            <NavLink to="/quizz">
                {/* <button className='button-play'>Play</button> */}
                <button class="btn-8"><span>Play</span></button>
            </NavLink>
        </div >
    );
}

export default ButtonPlay;