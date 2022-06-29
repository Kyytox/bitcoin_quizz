import React from 'react';
import ButtonPlay from './buttonPlay';

function Rules() {
    return (
        <div className='App-main'>
            <h3>Découvrer ou tester vos connaisances sur Bitcoin et son écosysteme </h3>
            <div className='App-main-rules'>
                <h4>100 Questions</h4>
                <h4>3 vies</h4>
                <h4>3 Satochis par bonne réponse</h4>
            </div>
            <ButtonPlay />
        </div>
    );
}

export default Rules;