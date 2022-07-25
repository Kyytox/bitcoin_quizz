import './boxQuestion.css';
import BoxRessources from './boxRessources';
import { resultQuestElt1, resultQuestElt2, resultQuestElt3, resultQuestElt4 } from './data';


function ResultQuestion(props) {

    // it's props contain function changeReponseUser
    const { newQuestion } = props
    const lang = localStorage.getItem('lang')

    return (
        <>
            <div className='quizz-box-question'>
                <div className="box-question-counter-question">
                    <p>{lang === 'fr' ? resultQuestElt1.FR : resultQuestElt1.EN} {props.counterQuestion} / 10</p>
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
                        ? <button id='button-answers' style={{ background: 'green' }}><p style={{ color: 'white' }}>{lang === 'fr' ? resultQuestElt2.FR : resultQuestElt2.EN}</p>{props.correct}</button>
                        : <button id='button-answers' style={{ background: 'Red' }}><p style={{ color: 'white' }}>{lang === 'fr' ? resultQuestElt3.FR : resultQuestElt3.EN}</p>{props.correct}</button>
                    }
                </div>

                <BoxRessources ressources={props.ressources} />

                <div className="box-question-button-next">
                    <button onClick={newQuestion}>{lang === 'fr' ? resultQuestElt4.FR : resultQuestElt4.EN}<i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div >
        </>
    );
}

export default ResultQuestion;