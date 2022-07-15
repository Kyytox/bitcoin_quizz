import './quizz.css';
import LNBits from 'lnbits';
import React from 'react';
import { Questions, listRandomNb } from './data';
import BoxQuestion from './boxQuestion';
import ResultQuestion from './resultQuestion';
import ResultQuizz from './resultQuizz';
window.Buffer = window.Buffer || require("buffer").Buffer;

var randomNb = Math.floor(Math.random() * Questions.length);

const { withdraw } = LNBits({
    adminKey: 'fb510410903d43ed8908880f829e5fdf',
    invoiceReadKey: '364aa256f08243e1b34800ea5906ca31',
    endpoint: 'https://www.lnbits.com', //default
});

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
            displayClaim: false,
            idLNURL: "",
            titleLNURL: "",
            amountLNURL: "",
            linkLNURL: "",
            boolRandomNb: false,
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
        this.displayClaim = this.displayClaim.bind(this);
        this.withdraw = this.withdraw.bind(this);
        this.passTimerat0 = this.passTimerat0.bind(this);
    }

    componentDidMount() {
        if (this.state.counterQuestion === 1) {
            listRandomNb.splice(0, listRandomNb.length)
        }
    }

    passTimerat0() {
        console.log('passTimerat0')
        this.setState({
            timer: 1,
        });
    }

    newQuestion() {
        console.log('Questions', Questions)

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
            console.log("randomNb", randomNb)

            this.state.boolRandomNb = false
            console.log("boolRandomNb", this.state.boolRandomNb)

            while (this.state.boolRandomNb === false) {
                console.log("boolRandomNb", this.state.boolRandomNb)
                // Vérifie si la valeur existe dans le tableau
                if (listRandomNb.indexOf(randomNb) === -1) {
                    listRandomNb.push(randomNb)
                    this.state.boolRandomNb = true
                    console.log("randomNb", randomNb)
                } else {
                    randomNb = Math.floor(Math.random() * Questions.length);
                    console.log("randomNb", randomNb)
                }
                console.log("listRandomNb", listRandomNb)
            }


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

    // update backgroundColor of Btn answers 
    changeBackgroundBtn() {
        // collect all btn answers for put her backgroundColor = white 
        const listBtn = document.querySelectorAll("#button-answers")
        for (let i = 0; i < listBtn.length; i++) {
            listBtn[i].style.background = "rgb(201 201 201)";
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
            newScore = newScore + 1
            newSatoshis = newSatoshis + 10
            result = true
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
                passTimerat0={this.passTimerat0}
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


    displayClaim() {
        this.withdraw();

        // collect loader and diplay it  
        const loader = document.getElementById("loader-qr-code")
        loader.style.display = "inline-block";

        setTimeout(() => {
            this.setState({
                displayClaim: true,
            });
        }, 4000);
    }

    //Generate Withdraw for colletct satoshis by Users
    async withdraw() {
        const link = await withdraw.createLink({
            title: 'Claim ' + this.state.satoshis + ' satoshis - Bitcoin Quizz',
            min_withdrawable: 10,
            max_withdrawable: this.state.satoshis,
            uses: 1,
            wait_time: 5,
            is_unique: true,
        });

        this.setState({
            idLNURL: link['id'],
            titleLNURL: link['title'],
            amountLNURL: link['max_withdrawable'],
            linkLNURL: link['lnurl'],
        });
    }


    renderResultQuizz() {
        return (
            <ResultQuizz
                counterScore={this.state.counterScore}
                satoshis={this.state.satoshis}
                displayClaim={this.state.displayClaim}
                idLNURL={this.state.idLNURL}
                titleLNURL={this.state.titleLNURL}
                amountLNURL={this.state.amountLNURL}
                linkLNURL={this.state.linkLNURL}
                fctDisplayClaim={this.displayClaim}
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