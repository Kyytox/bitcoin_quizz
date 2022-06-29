
import './boxQuestion.css';
import Timer from './timer';


function BoxQuestion(props) {

    // it's props contain function changeReponseUser
    const { reponseUser } = props
    // const { verifResult } = props

    return (
        <div className='quizz-box-question'>
            <div className="box-question-counter-question">
                <p>Question {props.counterQuestion}</p>

                <Timer
                    timer={props.timer}
                    verifResult={props.verifResult}
                />

                <div className='cpt-satoshis'>
                    <i class="fa-brands fa-bitcoin"></i>
                    <p>{props.satoshis} satoshis</p>
                </div>
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
                {/* <button onClick={() => { verifResult(); renderResult(); }}>Next</button> */}
            </div>
        </div >
    );
}

export default BoxQuestion;