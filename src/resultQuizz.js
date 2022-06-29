import './resultQuizz.css';
import './App';


function ResultQuizz(props) {

    console.log('debut ResultQuizz')

    return (
        <>
            <div className='box-result-quizz'>
                <div className='result-quizz-score'>
                    <p>Votre score :</p>
                    <p>{props.counterScore} bonnes réponses</p>
                    <hr></hr>
                    <p>Vous remportez :</p>
                    <p>{props.satoshis} Satoshis</p>
                    <button className='btn-claim-satoshis'>Claim</button>
                </div>
            </div >
        </>
    );
}

export default ResultQuizz;