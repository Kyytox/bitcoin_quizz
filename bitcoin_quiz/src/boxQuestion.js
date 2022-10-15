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
            <div className='box'>
                <div className="box-question-counter-question">
                    <Timer
                        timer={props.timer}
                        verifResult={props.verifResult}
                    />

                    <p>{lang === 'fr' ? boxQuestElt1.FR : boxQuestElt1.EN} {props.counterQuestion}</p>

                    <div className='cpt-satoshis'>
                        <p>{props.satoshis}</p>
                        <i className="fa-brands fa-bitcoin"></i>
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
            </div>
            <div className='div-button-next'>
                {props.answers[2] ? <button class="btn-21" onClick={verifResult}><span>Next</span></button>
                    : <button class="btn-21" onClick={verifResult}><span>Next</span></button>
                }
            </div>
        </div >
    );
}

export default BoxQuestion;