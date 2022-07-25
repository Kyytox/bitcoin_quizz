import { NavLink } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { resultQuizElt1, resultQuizElt2, resultQuizElt3, resultQuizElt4, resultQuizElt5, resultQuizElt6, resultQuizElt7 } from './data';
import './resultQuizz.css';
import './App';



function ResultQuizz(props) {


    // it's props contain function displayClaim
    const { fctDisplayClaim } = props
    const lang = localStorage.getItem('lang')

    const copyLNURL = async () => {
        var textAtCopy = document.getElementById('p-LNURL').innerHTML
        // console.log("textAtCopy: ", textAtCopy.slice(7))
        await navigator.clipboard.writeText(textAtCopy.slice(7));
    }

    return (
        <>
            <div className='box-result-quizz'>
                {props.displayClaim ? (
                    <div className='box-claim'>
                        <div id="qr-code">
                            <QRCode
                                title="Claim"
                                value={props.linkLNURL}
                                bgColor="#FFFFFF"
                                fgcolor="#000000"
                                level="L"
                                size="300"
                            />
                        </div>
                        <div className='qr-code-infos'>
                            <h4>{lang === 'fr' ? resultQuizElt1.FR : resultQuizElt1.EN}: {props.amountLNURL} satoshis</h4>
                            <p>Id: {props.idLNURL}</p>
                            <p>{lang === 'fr' ? resultQuizElt2.FR : resultQuizElt2.EN}: {props.titleLNURL}</p>
                            <p id='p-LNURL'>LNURL: {props.linkLNURL}</p>
                            <button onClick={copyLNURL}>Copy LNUrl</button>
                            <hr></hr>
                            <p>{lang === 'fr' ? resultQuizElt3.FR : resultQuizElt3.EN}</p>
                            <a className='qr-code-infos-link' href="https://www.walletofsatoshi.com/" target="_blank" rel="noopener noreferrer">Wallet Of Satoshi</a>
                            <a className='qr-code-infos-link' href="https://bluewallet.io/" target="_blank" rel="noopener noreferrer">Blue Wallet</a>
                            <a className='qr-code-infos-link' href="https://phoenix.acinq.co/" target="_blank" rel="noopener noreferrer">Phoenix</a>

                            <NavLink to="/">
                                <button className='btn-claim-satoshis'>{lang === 'fr' ? resultQuizElt4.FR : resultQuizElt4.EN}</button>
                            </NavLink>
                        </div>
                    </div>
                ) : (
                    <div className='result-quizz-score'>
                        <h4>{lang === 'fr' ? resultQuizElt5.FR : resultQuizElt5.EN} :</h4>
                        <p>{props.counterScore} {lang === 'fr' ? resultQuizElt6.FR : resultQuizElt6.EN}</p>
                        <hr></hr>
                        <h4>{lang === 'fr' ? resultQuizElt7.FR : resultQuizElt7.EN} :</h4>
                        <p>{props.satoshis} Satoshis</p>

                        {props.satoshis === 0 ? (
                            <NavLink to="/">
                                <button className='btn-claim-satoshis'>{lang === 'fr' ? resultQuizElt4.FR : resultQuizElt4.EN}</button>
                            </NavLink>
                        ) : (
                            <>
                                <button id='btn-claim' className='btn-claim-satoshis' onClick={fctDisplayClaim}>Claim</button>
                                <span id="loader-qr-code" style={{ display: 'none' }}></span>
                            </>
                        )}
                    </div>
                )}
            </div >
        </>
    );
}

export default ResultQuizz;