import './boxQuestion.css';
import BoxRessources from './boxRessources';


function ResultQuestion(props) {

    // it's props contain function changeReponseUser
    const { newQuestion } = props
    console.log('debut ResultQuestion')

    return (
        <>
            <div className='quizz-box-question'>
                <div className="box-question-counter-question">
                    <p>Question {props.counterQuestion}</p>
                    <div className='cpt-satoshis'>
                        <i class="fa-brands fa-bitcoin"></i>
                        <p>{props.satoshis} satoshis</p>
                    </div>
                </div>

                <div className="box-question-question">
                    <h4>{props.question}</h4>
                </div>

                <div className="box-question-answers">
                    <button id='button-answers'>{props.correct}</button>
                </div>

                <div className="box-question-result">
                    {props.result ? <p style={{ color: 'green' }}>Bonne Réponse</p> : <p style={{ color: 'red' }}>Mauvaise réponse</p>}
                </div>

                <div className="box-question-button-next">
                    <button onClick={newQuestion}>Question suivante <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div >
            <BoxRessources ressources={props.ressources} />
        </>
    );
}

export default ResultQuestion;