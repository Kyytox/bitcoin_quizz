import './boxQuestion.css';
import BoxRessources from './boxRessources';


function ResultQuestion(props) {

    // it's props contain function changeReponseUser
    const { newQuestion } = props

    return (
        <>
            <div className='quizz-box-question'>
                <div className="box-question-counter-question">
                    <p>Question {props.counterQuestion} / 10</p>
                    <div className='cpt-satoshis'>
                        <i class="fa-brands fa-bitcoin"></i>
                        <p>{props.satoshis} satoshis</p>
                    </div>
                </div>

                <div className="box-question-question">
                    <h4>{props.question}</h4>
                </div>

                <div className="box-question-result-answers">
                    {props.result
                        ? <button id='button-answers' style={{ background: 'green' }}><p style={{ color: 'white' }}>Bonne Reponse</p>{props.correct}</button>
                        : <button id='button-answers' style={{ background: 'Red' }}><p style={{ color: 'white' }}>Mauvaise reponse, la reponse etait</p>{props.correct}</button>
                    }
                </div>

                <BoxRessources ressources={props.ressources} />

                <div className="box-question-button-next">
                    <button onClick={newQuestion}>Question suivante <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div >
        </>
    );
}

export default ResultQuestion;