import { NavLink } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { useAdblockDetector } from 'react-adblock-detector';
import { resultQuizElt1, resultQuizElt2, resultQuizElt3, resultQuizElt4, resultQuizElt5, resultQuizElt6, resultQuizElt7, resultQuizElt8 } from './data';
import './resultQuizz.css';
import './App';



function ResultQuizz(props) {


    // it's props contain function displayClaim
    const { fctDisplayClaim } = props
    const lang = localStorage.getItem('lang')
    const [isAdblockCheckComplete, isAdblockerDetected] = useAdblockDetector();

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
                                size="250"
                            />
                        </div>
                        <div className='qr-code-infos'>
                            {props.linkLNURL ? (
                                <>
                                    <button class="btn-3" onClick={copyLNURL}><span>Copy LNUrl</span></button>
                                    <h4>{lang === 'fr' ? resultQuizElt1.FR : resultQuizElt1.EN}: {props.amountLNURL} satoshis</h4>
                                    <p className='p-label'>Id:</p>
                                    <p>{props.idLNURL}</p>
                                    <p className='p-label'>{lang === 'fr' ? resultQuizElt2.FR : resultQuizElt2.EN}:</p>
                                    <p>{props.titleLNURL}</p>
                                    <p id='p-LNURL'>LNURL: {props.linkLNURL}</p>
                                </>
                            ) : (
                                <div className='qr-code-infos'>
                                    <p>{lang === 'fr' ? resultQuizElt8.FR : resultQuizElt8.EN}</p>
                                </div>
                            )}
                            <hr></hr>

                            <NavLink to="/">
                                <button class="btn-3"><span>{lang === 'fr' ? resultQuizElt4.FR : resultQuizElt4.EN}</span></button>
                            </NavLink>

                            <p className='p-wallet'>{lang === 'fr' ? resultQuizElt3.FR : resultQuizElt3.EN}</p>
                            <a className='qr-code-infos-link' href="https://www.walletofsatoshi.com/" target="_blank" rel="noopener noreferrer">Wallet Of Satoshi</a>
                            <a className='qr-code-infos-link' href="https://bluewallet.io/" target="_blank" rel="noopener noreferrer">Blue Wallet</a>
                            <a className='qr-code-infos-link' href="https://phoenix.acinq.co/" target="_blank" rel="noopener noreferrer">Phoenix</a>
                        </div>
                    </div>
                ) : (
                    <div className='result-quizz-score'>
                        <h4>{lang === 'fr' ? resultQuizElt7.FR : resultQuizElt7.EN} :</h4>
                        <p>{props.satoshis} Satoshis</p>
                        <hr></hr>
                        <h4>{lang === 'fr' ? resultQuizElt5.FR : resultQuizElt5.EN} :</h4>
                        <p>{props.counterScore} {lang === 'fr' ? resultQuizElt6.FR : resultQuizElt6.EN}</p>
                        
                        {props.satoshis === 0 ? (
                            <NavLink to="/">
                                <button class="btn-3"><span>{lang === 'fr' ? resultQuizElt4.FR : resultQuizElt4.EN}</span></button>
                            </NavLink>
                        ) : (
                            <>
                                <button id='btn-claim' className='btn-3' onClick={fctDisplayClaim}><span>Claim</span></button>
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