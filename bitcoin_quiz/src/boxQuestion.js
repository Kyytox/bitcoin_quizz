import { boxQuestElt1 } from './data';
import './boxQuestion.css';
import Timer from './timer';


function BoxQuestion(props) {


    // it's props contain function changeReponseUser
    const { reponseUser } = props
    const { verifResult } = props
    const lang = localStorage.getItem('lang')

    return (
        <div className='quizz-box-question'>
            <div className="box-question-counter-question">
                <p>{lang === 'fr' ? boxQuestElt1.FR : boxQuestElt1.EN} {props.counterQuestion} / 10</p>

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
                {props.answers[0]
                    && <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[0]))}>{props.answers[0]}</button>
                }
                {props.answers[1]
                    && <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[1]))}>{props.answers[1]}</button>
                }
                {props.answers[2]
                    && <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[2]))}> {props.answers[2]}</button >
                }
                {props.answers[3]
                    && <button id='button-answers' onClick={((e) => reponseUser(e, props.answers[3]))}> {props.answers[3]}</button >
                }
            </div >
            <div className='div-button-next'>
                <button className='button-next' onClick={verifResult}>Next</button >
            </div>
        </div >
    );
}

export default BoxQuestion;