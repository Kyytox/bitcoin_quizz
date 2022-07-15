import './addQuestion.css';
import React from 'react';
import { Questions, listRandomNb } from './data';


const arrayAdd = [{
    id: "",
    question: "",
    answers: [],
    correct: "",
    ressources: [],
}]

class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Questions.length,
            question: "",
            answers: [],
            answers_1: "",
            answers_2: "",
            answers_3: "",
            answers_4: "",
            correct: "",
            ressources: [],
            ressources_1: "",
            ressources_2: "",
            ressources_3: "",
            ressources_4: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        const { question, answers_1, answers_2, answers_3, answers_4, correct, ressources_1, ressources_2, ressources_3, ressources_4 } = this.state
        event.preventDefault();

        this.state.answers.splice(0, this.state.answers.length)
        this.state.ressources.splice(0, this.state.ressources.length)
        arrayAdd.splice(0, arrayAdd.length)

        if (answers_1) {
            this.state.answers.push(answers_1)
        }
        if (answers_2) {
            this.state.answers.push(answers_2)
        }
        if (answers_3) {
            this.state.answers.push(answers_3)
        }
        if (answers_4) {
            this.state.answers.push(answers_4)
        }

        if (ressources_1) {
            this.state.ressources.push(ressources_1)
        }
        if (ressources_2) {
            this.state.ressources.push(ressources_2)
        }
        if (ressources_3) {
            this.state.ressources.push(ressources_3)
        }
        if (ressources_4) {
            this.state.ressources.push(ressources_4)
        }

        this.setState({
            answers: this.state.answers,
            ressources: this.state.ressources,
        })

        Questions.push({ id: this.state.id, question: question, answers: this.state.answers, correct: correct, ressources: this.state.ressources })
        console.log(' Questions:', Questions)

        test()
    }

    render() {
        return (
            <div className="page-add-question">
                <div className='div-form-add-question'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Votre Question:
                            <input
                                className='form-input-question'
                                name="question"
                                type="text"
                                value={this.state.question}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>answers_1:
                            <input
                                className='form-input-answers_1'
                                name="answers_1"
                                type="text"
                                value={this.state.answers_1}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>answers_2:
                            <input
                                className='form-input-answers_2'
                                name="answers_2"
                                type="text"
                                value={this.state.answers_2}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>answers_3:
                            <input
                                className='form-input-answers_3'
                                name="answers_3"
                                type="text"
                                value={this.state.answers_3}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>answers_4:
                            <input
                                className='form-input-answers_4'
                                name="answers_4"
                                type="text"
                                value={this.state.answers_4}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>correct:
                            <input
                                className='form-input-correct'
                                name="correct"
                                type="text"
                                value={this.state.correct}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>ressources_1:
                            <input
                                className='form-input-ressources_1'
                                name="ressources_1"
                                type="text"
                                value={this.state.ressources_1}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>ressources_2:
                            <input
                                className='form-input-ressources_2'
                                name="ressources_2"
                                type="text"
                                value={this.state.ressources_2}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>ressources_3:
                            <input
                                className='form-input-ressources_3'
                                name="ressources_3"
                                type="text"
                                value={this.state.ressources_3}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>ressources_4:
                            <input
                                className='form-input-ressources_4'
                                name="ressources_4"
                                type="text"
                                value={this.state.ressources_4}
                                onChange={this.handleChange}
                            />
                        </label>
                        <input className='from-btn-input' type="button" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddQuestion;