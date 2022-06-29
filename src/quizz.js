import './quizz.css';
import React from 'react';
import { Questions } from './data';
import BoxQuestion from './boxQuestion';
import ResultQuestion from './resultQuestion';
import ResultQuizz from './resultQuizz';


var randomNb = Math.floor(Math.random() * Questions.length);


class Quizz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterQuestion: 1,
            counterScore: 0,
            reponseUser: '',
            result: false,
            displayResult: false,
            resultQuizz: false,
            satoshis: 0,
            timer: 15,
            newQuestion: {
                id: Questions[randomNb].id,
                question: Questions[randomNb].question,
                answers: Questions[randomNb].answers,
                correct: Questions[randomNb].correct,
                ressources: Questions[randomNb].ressources,
            },
        };

        this.newQuestion = this.newQuestion.bind(this);
        this.changeReponseUser = this.changeReponseUser.bind(this);
        this.verifResult = this.verifResult.bind(this);
        this.changeBackgroundBtn = this.changeBackgroundBtn.bind(this);
    }



    // update backgroundColor of Btn answers 
    changeBackgroundBtn() {
        // collect all btn answers for put her backgroundColor = white 
        const listBtn = document.querySelectorAll("#button-answers")
        for (let i = 0; i < listBtn.length; i++) {
            listBtn[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            listBtn[i].style.backdropFilter = "blur(8px)";
        }
    }

    //Change reponse select by User 
    changeReponseUser(e, data) {
        // collect text in target (button click) when user select answer
        let newReponseUser = data

        // update backgroundColor, call method
        this.changeBackgroundBtn();

        // update color because user select this answer 
        e.target.style.background = 'green';


        // update value reponse user 
        this.setState({
            reponseUser: newReponseUser,
        });
    }

    // Vérif if reponseUser is = reponse Question 
    verifResult() {

        let displayResult = true
        let result = false
        let newScore = this.state.counterScore
        let newSatoshis = this.state.satoshis

        if (this.state.reponseUser === this.state.newQuestion.correct) {
            console.log('CORECT')
            newScore = newScore + 1
            newSatoshis = newSatoshis + 3
            result = true
        } else {
            console.log('FAUX')
        }

        // update counterScore 
        this.setState({
            counterScore: newScore,
            result: result,
            displayResult: displayResult,
            satoshis: newSatoshis,
        });
        this.renderResult();
    }



    newQuestion() {

        console.log('this.state.counterQuestion: ', this.state.counterQuestion)
        if (this.state.counterQuestion === 2) {
            let resultQuizz = true
            // update value question 
            this.setState({
                resultQuizz: resultQuizz,
            });
        } else {
            console.log('new question')
            // new question 
            randomNb = Math.floor(Math.random() * Questions.length);
            let id = Questions[randomNb].id;
            let question = Questions[randomNb].question;
            let answers = Questions[randomNb].answers;
            let correct = Questions[randomNb].correct;
            let ressources = Questions[randomNb].ressources;

            // +1 counter question 
            let newCounterQuestion = this.state.counterQuestion + 1

            // initialize result 
            let result = false

            //initialize display Result
            let displayResult = false

            // update backgroundColor, call method
            this.changeBackgroundBtn();

            // update value question 
            this.setState({
                counterQuestion: newCounterQuestion,
                reponseUser: '',
                result: result,
                displayResult: displayResult,
                newQuestion: {
                    id: id,
                    question: question,
                    answers: answers,
                    correct: correct,
                    ressources: ressources,
                }
            });
        }
    }

    renderQuiz() {
        return (
            <BoxQuestion
                question={this.state.newQuestion.question}
                answers={this.state.newQuestion.answers}
                counterQuestion={this.state.counterQuestion}
                counterScore={this.state.counterScore}
                satoshis={this.state.satoshis}
                timer={this.state.timer}
                reponseUser={this.changeReponseUser}
                verifResult={this.verifResult}
            />
        );
    }

    renderResult() {
        return (
            <ResultQuestion
                result={this.state.result}
                counterQuestion={this.state.counterQuestion}
                counterScore={this.state.counterScore}
                question={this.state.newQuestion.question}
                correct={this.state.newQuestion.correct}
                ressources={this.state.newQuestion.ressources}
                satoshis={this.state.satoshis}
                newQuestion={this.newQuestion}
            />
        );
    }


    renderResultQuizz() {
        console.log('renderResultQuizz')
        return (
            <ResultQuizz
                counterScore={this.state.counterScore}
                satoshis={this.state.satoshis}
            />
        );
    }

    render() {
        return (
            <div className="page-quizz-main">
                {/* if resultQuizz = true ==> ResultQuizz() else if displayResult = True ==> renderResult() else renderQuiz() */}
                {this.state.resultQuizz ? this.renderResultQuizz() : this.state.displayResult ? this.renderResult() : this.renderQuiz()}
            </div>
        );
    }
}

export default Quizz;