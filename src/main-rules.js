import React from 'react';
import './App.css';
import ButtonPlay from './buttonPlay';

function Rules() {
    return (
        <div className='App-main'>
            <h3>Découvrer ou tester vos connaisances sur Bitcoin et son écosysteme </h3>
            <div className='App-main-rules'>
                <div className='main-rules-questions'>
                    <h4>100 Questions</h4>
                    <i class="fa-solid fa-question"></i>
                </div>

                <div className='main-rules-life'>
                    <h4>3 vies</h4>
                    <i class="fa-solid fa-heart"></i>
                </div>

                <div className='main-rules-satoshis'>
                    <h4>3 Satochis par bonne réponse</h4>
                    <i class="fa-brands fa-bitcoin"></i>
                </div>
            </div >
            <ButtonPlay />
        </div >
    );
}

export default Rules;