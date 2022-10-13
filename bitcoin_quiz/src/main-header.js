import React from 'react';
import { useState, useEffect } from "react";
import { lang } from './data';
import './App.css';

import axios from 'axios';
import QRCode from 'react-qr-code';
import { mainRulesElt5, mainRulesElt6 } from './data';




// blue = linear-gradient(90deg, rgb(8 4 143) 13%, rgb(34 93 187) 56%, rgb(0, 186, 201) 100%);
// green = linear-gradient(90deg, rgb(2 110 46) 13%, rgb(30 149 52) 56%, rgb(48 205 39) 100%);
// pink = linear-gradient(90deg, rgb(79 4 122) 13%, rgb(164 0 175) 56%, rgb(255 29 174) 100%);
// black = linear-gradient(90deg, rgba(34,34,34,1) 18%, rgba(115,115,115,1) 56%, rgba(154,154,154,1) 100%);
// red = linear-gradient(90deg, rgba(158, 0, 0, 1) 13%, rgba(170, 42, 0, 1) 47%, rgba(201, 176, 0, 1) 100%)



function Header() {

    const [request, setRequest] = useState("");
    const [walletBalance, setWalletBalance] = useState();
    const [displayInvoce, setDisplayInvoce] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [amount, setAmount] = useState();

    const langFR = () => {
        localStorage.setItem('lang', 'fr')
        window.location.reload()
    }

    const langEN = () => {
        localStorage.setItem('lang', 'en')
        window.location.reload()
    }

    const lang = localStorage.getItem('lang')

    useEffect(() => {
        details();
    })

    const details = async () => {
        if (!walletBalance) {
            const detailsAPI = `http://localhost:6800/details`;
            let repDetailsAPI = await fetch(detailsAPI),
                bodyDetailsAPI = await repDetailsAPI.json();
            const balance = JSON.parse(bodyDetailsAPI)['balance'].toString()
            setWalletBalance(balance.slice(0, -3))
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        const hide = document.getElementById("form-envoi")
        hide.style.display = "none";

        // collect loader and diplay it  
        const loader = document.getElementById("loader-qr-code")
        loader.style.display = "inline-block";

        createInvoce();
    }

    const changeDisplayForm = event => {
        setDisplayForm(true)
    }

    const copyLNURL = async () => {
        var textAtCopy = document.getElementById('p-LNURL').innerHTML
        await navigator.clipboard.writeText(textAtCopy);
    }

    const createInvoce = async () => {

        const amountSend = { amount: amount }
        const invoceAPI = await axios.post(`http://localhost:6800/invoce`, amountSend)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
            });

        setRequest(invoceAPI)
        setDisplayInvoce(true);
    };

    return (
        <div className="App-header">
            <div className='app-header-div-head'>
                <div className='div-envoi-satoshis'>
                    {displayInvoce ? (
                        <div className='qr-code-envoi'>
                            <p id='p-LNURL'>{request}</p>
                            <QRCode
                                title="Envoi"
                                value={request}
                                bgColor="#FFFFFF"
                                fgcolor="#000000"
                                level="L"
                                size={200}
                            />
                            <button onClick={copyLNURL}>Copy LNUrl</button>
                        </div>
                    ) : (
                        <>
                            {!displayForm ? (
                                <div className='App-main-box-wallet-details'>
                                    {/* <p>{lang === 'fr' ? mainRulesElt5.FR : mainRulesElt5.EN}</p> */}
                                    <span>{lang === 'fr' ? mainRulesElt6.FR : mainRulesElt6.EN} : {walletBalance}</span>
                                    <button onClick={changeDisplayForm}>{lang === 'fr' ? mainRulesElt5.FR : mainRulesElt5.EN}</button>
                                </div>
                            ) : (
                                <>
                                    {/* <form onSubmit={handleSubmit} id='form-envoi'>
                                        <label> Entrer un montant:
                                            <input
                                                className='form-input-amount'
                                                type="text"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)} />
                                        </label>
                                        <input className='from-btn-input' type="submit"/>
                                    </form> */}
                                    <span id="loader-qr-code" style={{ display: 'none' }}></span>
                                </>
                            )}
                        </>
                    )}
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