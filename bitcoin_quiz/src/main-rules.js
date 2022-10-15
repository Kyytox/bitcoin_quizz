import { Questions, mainRulesElt1, mainRulesElt2, mainRulesElt3, mainRulesElt4, mainRulesElt7, mainRulesElt11, mainRulesElt12 } from './data';
import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonPlay from './buttonPlay';

function Rules() {

    const lenQuestion = Questions.length
    const lang = localStorage.getItem('lang')

    return (
        <div className='App-main'>
            <h2>{lang === 'fr' ? mainRulesElt1.FR : mainRulesElt1.EN}</h2>
            <h2>{lang === 'fr' ? mainRulesElt12.FR : mainRulesElt12.EN}</h2>
            <div className='App-main-rules'>
                <div className='main-rules-list'>
                    <i className="fa-solid fa-list"></i>
                    <h4>{lenQuestion} {lang === 'fr' ? mainRulesElt2.FR : mainRulesElt2.EN}</h4>
                </div>

                <div className='main-rules-questions'>
                    <i className="fa-solid fa-question"></i>
                    <h4>10 {lang === 'fr' ? mainRulesElt3.FR : mainRulesElt3.EN}</h4>
                </div>

                <div className='main-rules-satoshis'>
                    <i className="fa-brands fa-bitcoin"></i>
                    <h4>10 {lang === 'fr' ? mainRulesElt4.FR : mainRulesElt4.EN}</h4>
                </div>
            </div >
            <div className='App-main-box-wallet'>
                <ButtonPlay />
                <div className='div-suggest-question-link'>
                    <a href="https://twitter.com/Kytox_/status/1548648185039671296" target="_blank" rel="noopener noreferrer">{lang === 'fr' ? mainRulesElt7.FR : mainRulesElt7.EN}</a>
                </div>
                <p className='warning-brave'><i className="fa-solid fa-triangle-exclamation"></i> {lang === 'fr' ? mainRulesElt11.FR : mainRulesElt11.EN}</p>
            </div>
        </div >
    );
}

export default Rules;