import React from 'react';
import { useState, useEffect } from "react";
import { lang } from './data';
import './App.css';



// blue = linear-gradient(90deg, rgb(8 4 143) 13%, rgb(34 93 187) 56%, rgb(0, 186, 201) 100%);
// green = linear-gradient(90deg, rgb(2 110 46) 13%, rgb(30 149 52) 56%, rgb(48 205 39) 100%);
// pink = linear-gradient(90deg, rgb(79 4 122) 13%, rgb(164 0 175) 56%, rgb(255 29 174) 100%);
// black = linear-gradient(90deg, rgba(34,34,34,1) 18%, rgba(115,115,115,1) 56%, rgba(154,154,154,1) 100%);
// red = linear-gradient(90deg, rgba(158, 0, 0, 1) 13%, rgba(170, 42, 0, 1) 47%, rgba(201, 176, 0, 1) 100%)



function Header() {

    const Blue = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgb(8 4 143) 13%, rgb(34 93 187) 56%, rgb(0, 186, 201) 100%)";
    }
    const Green = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgb(2 110 46) 13%, rgb(30 149 52) 56%, rgb(48 205 39) 100%)";
    }
    const Pink = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgb(79 4 122) 13%, rgb(164 0 175) 56%, rgb(255 29 174) 100%)";
    }
    const Black = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgba(9,9,9,1) 0%, rgba(75,75,75,1) 56%, rgba(154,154,154,1) 100%)";
    }
    const Red = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgba(158, 0, 0, 1) 13%, rgba(170, 42, 0, 1) 47%, rgba(201, 176, 0, 1) 100%)";
    }

    const langFR = () => {
        localStorage.setItem('lang', 'fr')
        window.location.reload()
    }

    const langEN = () => {
        localStorage.setItem('lang', 'en')
        window.location.reload()
    }

    const lang = localStorage.getItem('lang')

    return (
        <div className="App-header">
            <div className='app-header-div-head'>
                <div className='div-head-btn'>
                    <button onClick={Blue} className='blue'></button>
                    <button onClick={Green} className='green'></button>
                    <button onClick={Pink} className='pink'></button>
                    <button onClick={Black} className='black'></button>
                    <button onClick={Red} className='red'></button>
                </div>
                <div className='div-head-flag-link'>
                    <img src="/flag_FR.png" title='Francais' alt='Francais' onClick={langFR}></img>
                    <img src="/flag_EN.png" title='English' alt='English' onClick={langEN}></img>
                    <a href="https://github.com/Kyytox/bitcoin_quizz" target="_blank" rel="noopener noreferrer" title='GitHub'><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <h1 className='App-header-title'>Bitcoin Quiz</h1>
        </div>
    );
}

export default Header;