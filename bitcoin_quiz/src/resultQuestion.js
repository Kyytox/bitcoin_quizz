import './boxQuestion.css';
import BoxRessources from './boxRessources';
import { resultQuestElt1, resultQuestElt4 } from './data';


function ResultQuestion(props) {

    // it's props contain function changeReponseUser
    const { newQuestion } = props
    const lang = localStorage.getItem('lang')

    return (
        <>
            <div className='quizz-box-question'>
                {props.result ?
                    <div className='box' style={{ background: 'rgb(2 76 2 / 60%)' }}>
                        <div className="box-question-counter-question">
                            <p>{lang === 'fr' ? resultQuestElt1.FR : resultQuestElt1.EN} {props.counterQuestion}</p>
                            <div className='cpt-satoshis'>
                                <p>{props.satoshis}</p>
                                <i className="fa-brands fa-bitcoin"></i>
                            </div>
                        </div>
                        <div className="box-question-question">
                            <h4>{props.question}</h4>
                        </div>

                        <div className="box-question-result-answers">
                            <button id='button-answers'>{props.correct}</button>
                            
                        </div>
                        <BoxRessources ressources={props.ressources} />
                    </div>
                :
                    <div className='box' style={{ background: 'rgb(76 2 2 / 60%)' }}>
                        <div className="box-question-counter-question">
                            <p>{lang === 'fr' ? resultQuestElt1.FR : resultQuestElt1.EN} {props.counterQuestion}</p>
                            <div className='cpt-satoshis'>
                                <p>{props.satoshis}</p>
                                <i className="fa-brands fa-bitcoin"></i>
                            </div>
                        </div>
                        <div className="box-question-question">
                            <h4>{props.question}</h4>
                        </div>

                        <div className="box-question-result-answers">
                            <button id='button-answers'>{props.correct}</button>
                        </div>
                        <BoxRessources ressources={props.ressources} />
                    </div>
                }
                <div className="div-button-next-q">
                    <button class="btn-21" onClick={newQuestion}><span>{lang === 'fr' ? resultQuestElt4.FR : resultQuestElt4.EN}</span></button>
                </div>
            </div >
        </>
    );
}

export default ResultQuestion;