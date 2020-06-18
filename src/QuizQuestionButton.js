import React, {Component} from 'react';

class QuizQuestionButton extends Component {
    handleClick() {
        //console.log('handleClick() called');
        if (this.props.button_text === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    } 
    render() {
        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton;