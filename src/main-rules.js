import React, { useState } from 'react';
import LNBits from 'lnbits';
import QRCode from 'react-qr-code';
import './App.css';
import ButtonPlay from './buttonPlay';
import { Questions } from './data';
import ButtonAddQuestion from './buttonAddQuestion';

function Rules() {

    const [request, setRequest] = useState("");
    const [walletBalance, setWalletBalance] = useState();
    const [displayInvoce, setDisplayInvoce] = useState(false);
    const [amount, setAmount] = useState();
    const lenQuestion = Questions.length

    // Config
    const { wallet } = LNBits({
        adminKey: 'fb510410903d43ed8908880f829e5fdf',
        invoiceReadKey: '364aa256f08243e1b34800ea5906ca31',
        endpoint: 'https://www.lnbits.com', //default
    });

    const details = async () => {
        const walletDetails = await wallet.walletDetails();
        setWalletBalance(walletDetails['balance'])
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

    const copyLNURL = async () => {
        var textAtCopy = document.getElementById('p-LNURL').innerHTML
        await navigator.clipboard.writeText(textAtCopy);
    }

    const createInvoce = async () => {
        console.log('amount: ', amount)
        const newInvoice = await wallet.createInvoice({
            amount: amount,
            memo: 'Envoi ' + amount + ' statoshis wallet Bitcoin Quizz',
            out: false,
        });
        setRequest(newInvoice['payment_request'])
        setDisplayInvoce(true);
    };

    details();

    return (
        <div className='App-main'>
            <h3>Decouvrer ou tester vos connaisances sur Bitcoin et son ecosysteme </h3>
            <div className='App-main-rules'>
                <div className='main-rules-list'>
                    <h4>{lenQuestion} Questions au total</h4>
                    <i class="fa-solid fa-list"></i>
                </div>

                <div className='main-rules-questions'>
                    <h4>10 questions par game</h4>
                    <i class="fa-solid fa-question"></i>
                </div>

                <div className='main-rules-satoshis'>
                    <h4>10 Satoshis par bonne reponse</h4>
                    <i class="fa-brands fa-bitcoin"></i>
                </div>
            </div >
            <div className='App-main-box-wallet'>
                {/* <ButtonAddQuestion /> */}
                <ButtonPlay />
                <a href="https://twitter.com/Kytox_/status/1546965980038971392" target="_blank" rel="noopener noreferrer">Proposer une question</a>
                <div className='div-envoi-satoshis'>
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
                                size="200"
                            />
                        </div>
                    ) : (
                        <>
                            <div className='App-main-box-wallet-details'>
                                {/* <p>Le wallet Bitcoin Quizz contient {walletBalance} satoshis</p> */}
                                <p>Envoyer des satoshis au wallet Bitcoin Quizz</p>
                                <span>Balance : {walletBalance}</span>
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
                </div>
            </div>
        </div >
    );
}

export default Rules;