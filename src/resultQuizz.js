import { NavLink } from 'react-router-dom';
import QRCode from 'react-qr-code';
import './resultQuizz.css';
import './App';



function ResultQuizz(props) {


    // it's props contain function displayClaim
    const { fctDisplayClaim } = props

    const copyLNURL = async () => {
        var textAtCopy = document.getElementById('p-LNURL').innerHTML
        console.log("textAtCopy: ", textAtCopy)
        await navigator.clipboard.writeText(textAtCopy);
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
                            <h4>Montant: {props.amountLNURL} satoshis</h4>
                            <p>Id: {props.idLNURL}</p>
                            <p>Titre: {props.titleLNURL}</p>
                            <p id='p-LNURL'>LNURL: {props.linkLNURL}</p>
                            <button onClick={copyLNURL}>Copy LNUrl</button>
                            <NavLink to="/">
                                <button className='btn-claim-satoshis'>Rejouer</button>
                            </NavLink>
                        </div>
                    </div>
                ) : (
                    <div className='result-quizz-score'>
                        <h4>Votre score :</h4>
                        <p>{props.counterScore} bonnes reponses</p>
                        <hr></hr>
                        <h4>Vous remportez :</h4>
                        <p>{props.satoshis} Satoshis</p>

                        {props.satoshis === 0 ? (
                            <NavLink to="/">
                                <button className='btn-claim-satoshis'>Rejouer</button>
                            </NavLink>
                        ) : (
                            <>
                                <button className='btn-claim-satoshis' onClick={fctDisplayClaim}>Claim</button>
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