import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }
    render() {
        const answer_list = this.props.quiz_question.answer_options
        return (
            <main>
                <section>
                <p>
                    {this.props.quiz_question.instruction_text}
                </p>
                </section>
                <section className="buttons">
                <ul>
                    {
                        answer_list.map((quiz_question, index) => {
                            return (
                                <QuizQuestionButton button_text={quiz_question} 
                                key={index} 
                                clickHandler={this.handleClick.bind(this)} />
                            )
                        })
                    }
                </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion;