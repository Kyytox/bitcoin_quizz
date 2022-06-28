
import './boxQuestion.css';


function BoxQuestion(props) {

    // it's props contain function changeReponseUser
    const { reponseUser } = props
    const { verifResult } = props
    const { renderResult } = props

    return (
        <div className='quizz-box-question'>
            <div className="box-question-counter-question">
                <p>Question {props.counterQuestion}</p>
                <p> {props.counterScore} Réponse correctes </p>

            </div>

            <div className="box-question-question">
                <h4>{props.question}</h4>
            </div>

            <div className="box-question-answers">
                <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[0]))}>{props.answers[0]}</button>
                <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[1]))}>{props.answers[1]}</button>
                <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[2]))}>{props.answers[2]}</button>
                <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[3]))}>{props.answers[3]}</button>
            </div>

            <div className="box-question-button-next">
                {/* call multiple method in onClick  */}
                <button className='button-play' onClick={() => { verifResult(); renderResult(); }}>Next</button>
            </div>
        </div >
    );
}

export default BoxQuestion;