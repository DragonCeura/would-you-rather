import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formatQuestion } from '../utils/Utils';

class Question extends Component {
  render() {
    const { question } = this.props;
    
    return(
      <div className='question'>
        <div>{question.optionOne}</div>
        <div>or</div>
        <div>{question.optionTwo}</div>
        {question[question.answer] ? <h5>Answered: {question[question.answer]}</h5> : null}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { question_id }) {
  const question = questions[question_id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users, authedUser)
      : null,
  }
}

export default connect(mapStateToProps)(Question);
