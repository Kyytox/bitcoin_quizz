import React from 'react';
import { Questions, listRandomNb } from './data';
import BoxQuestion from './boxQuestion';
import ResultQuestion from './resultQuestion';
import ResultQuizz from './resultQuizz';
import IPnotAuthoriz from './iPnotAuthoriz';
import axios from 'axios';
window.Buffer = window.Buffer || require("buffer").Buffer;

var randomNb = Math.floor(Math.random() * Questions.length);
const lang = localStorage.getItem('lang')


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
            IPauthoriz: true,
            newQuestion: {
                id: Questions[randomNb].id,
                question: lang === 'fr' ? Questions[randomNb].fr.question : Questions[randomNb].en.question,
                answers: lang === 'fr' ? Questions[randomNb].fr.answers : Questions[randomNb].en.answers,
                correct: lang === 'fr' ? Questions[randomNb].fr.correct : Questions[randomNb].en.correct,
                ressources: lang === 'fr' ? Questions[randomNb].fr.ressources : Questions[randomNb].en.ressources,
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

        if (this.state.counterQuestion === 20) {
            randomNb = Math.floor(Math.random() * Questions.length);
            let resultQuizz = true
            // update value question 
            this.setState({
                resultQuizz: resultQuizz,
            });
        } else {
            console.log('new question')
            // new question 
            randomNb = Math.floor(Math.random() * Questions.length);

            this.state.boolRandomNb = false

            while (this.state.boolRandomNb === false) {
                // Vérifie si la valeur existe dans le tableau
                if (listRandomNb.indexOf(randomNb) === -1) {
                    listRandomNb.push(randomNb)
                    this.state.boolRandomNb = true
                } else {
                    randomNb = Math.floor(Math.random() * Questions.length);
                }
            }


            let id = Questions[randomNb].id;
            let question = lang === 'fr' ? Questions[randomNb].fr.question : Questions[randomNb].en.question;
            let answers = lang === 'fr' ? Questions[randomNb].fr.answers : Questions[randomNb].en.answers;
            let correct = lang === 'fr' ? Questions[randomNb].fr.correct : Questions[randomNb].en.correct;
            let ressources = lang === 'fr' ? Questions[randomNb].fr.ressources : Questions[randomNb].en.ressources;

            // sort list randomly 
            answers = answers.sort(() => Math.random() - 0.5)

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
            newSatoshis = newSatoshis + 2
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

        const hide = document.getElementById("btn-claim")
        hide.style.display = "none";

        // collect loader and diplay it  
        const loader = document.getElementById("loader-qr-code")
        loader.style.display = "inline-block";

        setTimeout(() => {
            this.setState({
                displayClaim: true,
            });
        }, 3000);
    }

    //Generate Withdraw for colletct satoshis by Users
    async withdraw() {

        const IP = await axios.get("https://geolocation-db.com/json/");
        const infosWithd = { bal: this.state.satoshis, IP: IP.data['IPv4'] }
        await axios.post(`http://localhost:6500/dataWithdraw`, infosWithd);

        const IPreq = `http://localhost:6500/dataIP`;
        let repIPreq = await fetch(IPreq),
            bodyIPreq = await repIPreq.json();

        // const withdrawBal = { bal: this.state.satoshis }
        // axios
        //     .post(`http://localhost:5000/dataWithdraw`, withdrawBal)
        //     .then(() => console.log(''))
        //     .catch(err => {
        //         console.error(err);
        //     });


        // const IPreq = `http://localhost:5000/dataIP`;
        // let repIPreq = await fetch(IPreq),
        //     bodyIPreq = await repIPreq.json();

        if (bodyIPreq) {
            const withdrawAPI = `http://localhost:6500/withdraw`;
            let repWithdrawAPI = await fetch(withdrawAPI),
                bodyWithdrawAPI = await repWithdrawAPI.json();

            this.setState({
                idLNURL: JSON.parse(bodyWithdrawAPI)['id'],
                titleLNURL: JSON.parse(bodyWithdrawAPI)['title'],
                amountLNURL: JSON.parse(bodyWithdrawAPI)['max_withdrawable'],
                linkLNURL: JSON.parse(bodyWithdrawAPI)['lnurl'],
            });
        } else {
            this.setState({
                IPauthoriz: false
            });
        }
    }



    renderIPnotAuthoriz() {
        return (
            <IPnotAuthoriz
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
                {/* if IPauthoriz = true ==> if resultQuizz = true ==> ResultQuizz() else if displayResult = True ==> renderResult() else renderQuiz() else renderIPnotAuthoriz */}
                {this.state.IPauthoriz ? this.state.resultQuizz ? this.renderResultQuizz() : this.state.displayResult ? this.renderResult() : this.renderQuiz() : this.renderIPnotAuthoriz()}
            </div>
        );
    }
}

export default Quizz;