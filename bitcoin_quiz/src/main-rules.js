import { Questions, mainRulesElt1, mainRulesElt2, mainRulesElt3, mainRulesElt4, mainRulesElt7, mainRulesElt11 } from './data';
import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonPlay from './buttonPlay';

function Rules() {

    // const [request, setRequest] = useState("");
    // const [walletBalance, setWalletBalance] = useState();
    // const [displayInvoce, setDisplayInvoce] = useState(false);
    // const [amount, setAmount] = useState();
    const lenQuestion = Questions.length
    const lang = localStorage.getItem('lang')

    // useEffect(() => {
    //     details();
    // })

    // const details = async () => {
    //     if (!walletBalance) {
    //         const detailsAPI = `http://localhost:6800/details`;
    //         let repDetailsAPI = await fetch(detailsAPI),
    //             bodyDetailsAPI = await repDetailsAPI.json();
    //         const balance = JSON.parse(bodyDetailsAPI)['balance'].toString()
    //         setWalletBalance(balance.slice(0, -3))
    //     }
    // };

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     const hide = document.getElementById("form-envoi")
    //     hide.style.display = "none";

    //     // collect loader and diplay it  
    //     const loader = document.getElementById("loader-qr-code")
    //     loader.style.display = "inline-block";

    //     createInvoce();
    // }

    // const copyLNURL = async () => {
    //     var textAtCopy = document.getElementById('p-LNURL').innerHTML
    //     await navigator.clipboard.writeText(textAtCopy);
    // }

    // const createInvoce = async () => {

    //     const amountSend = { amount: amount }
    //     const invoceAPI = await axios.post(`http://localhost:6800/invoce`, amountSend)
    //         .then(res => res.data)
    //         .catch(err => {
    //             console.error(err);
    //         });

    //     setRequest(invoceAPI)
    //     setDisplayInvoce(true);
    // };

    return (
        <div className='App-main'>
            <h2>{lang === 'fr' ? mainRulesElt1.FR : mainRulesElt1.EN}</h2>
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
                <p className='warning-brave'><i className="fa-solid fa-triangle-exclamation"></i> {lang === 'fr' ? mainRulesElt11.FR : mainRulesElt11.EN}</p>
                <ButtonPlay />
                <div className='div-suggest-question-link'>
                    {/* <p>{lang === 'fr' ? mainRulesElt7.FR : mainRulesElt7.EN}</p> */}
                    <a href="https://twitter.com/Kytox_/status/1548648185039671296" target="_blank" rel="noopener noreferrer">{lang === 'fr' ? mainRulesElt7.FR : mainRulesElt7.EN}</a>
                </div>

                {/* <div className='div-envoi-satoshis'>
                    {displayInvoce ? (
                        <div className='qr-code-envoi'>
                            <p id='p-LNURL'>{request}</p>
                            <button onClick={copyLNURL}>Copy LNUrl</button>
                            <QRCode
                                title="Envoi"
                                value={request}
                                bgColor="#FFFFFF"
                                fgcolor="#000000"
                                level="L"
                                size={200}
                            />
                        </div>
                    ) : (
                        <>
                            <div className='App-main-box-wallet-details'>
                                <p>{lang === 'fr' ? mainRulesElt5.FR : mainRulesElt5.EN}</p>
                                <span>{lang === 'fr' ? mainRulesElt6.FR : mainRulesElt6.EN} : {walletBalance}</span>
                            </div>
                            <form onSubmit={handleSubmit} id='form-envoi'>
                                <label>Entrer un montant:
                                    <input
                                        className='form-input-amount'
                                        type="text"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)} />
                                </label>
                                <input className='from-btn-input' type="submit" />
                            </form>
                            <span id="loader-qr-code" style={{ display: 'none' }}></span>
                        </>
                    )}
                </div> */}
            </div>
        </div >
    );
}

export default Rules;