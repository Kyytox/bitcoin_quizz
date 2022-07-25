import React from 'react';
import { useState, useEffect } from "react";
import { lang } from './data';
import './App.css';



// blue = linear-gradient(90deg, rgba(5,0,158,1) 13%, rgba(0,66,170,1) 56%, rgba(0,186,201,1) 100%)
// green = linear-gradient(90deg, rgba(0,116,47,1) 13%, rgba(0,153,28,1) 56%, rgba(0,199,26,1) 100%);
// pink = linear-gradient(90deg, rgba(100,0,158,1) 13%, rgba(158,0,168,1) 56%, rgba(228,0,146,1) 100%)
// black = linear-gradient(90deg, rgba(34,34,34,1) 18%, rgba(115,115,115,1) 56%, rgba(154,154,154,1) 100%);
// red = linear-gradient(90deg, rgba(158, 0, 0, 1) 13%, rgba(170, 42, 0, 1) 47%, rgba(201, 176, 0, 1) 100%)



function Header() {

    const Blue = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgba(5,0,158,1) 13%, rgba(0,66,170,1) 56%, rgba(0,186,201,1) 100%)";
    }
    const Green = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgba(0,116,47,1) 13%, rgba(0,153,28,1) 56%, rgba(10,184,0,1) 100%)";
    }
    const Pink = () => {
        const background = document.body
        background.style.background = "linear-gradient(90deg, rgba(100,0,158,1) 13%, rgba(158,0,168,1) 56%, rgba(228,0,146,1) 100%)";
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
        <header className="App-header">
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
                    <a href="https://github.com/Kyytox/bitcoin_quizz" target="_blank" rel="noopener noreferrer" title='GitHub'><i class="fa-brands fa-github"></i></a>
                    {lang}
                </div>
            </div>
            <h1 className='App-header-title'>Bitcoin Quiz</h1>
        </header>
    );
}

export default Header;