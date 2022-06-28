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
                    <p> {props.counterScore} Réponse correctes</p>
                </div>

                <div className="box-question-question">
                    <h4>{props.question}</h4>
                </div>

                <div className="box-question-answers">
                    <button id='button-answers'>{props.correct}</button>
                </div>

                <div className="box-question-result">
                    {props.result ? <p>Bonne Réponse</p> : <p>Mauvaise réponse</p>}
                </div>

                <div className="box-question-button-next">
                    <button onClick={newQuestion}>Next</button>
                </div>
            </div >
            <BoxRessources ressources={props.ressources} />
        </>
    );
}

export default ResultQuestion;