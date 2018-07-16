import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formatQuestion } from '../utils/Utils';

class QuestionStats extends Component {
  render() {
    const { question } = this.props;
    const { avatar, author, optionOne, optionOneVotes, optionTwo, optionTwoVotes, answer } = question;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return (
      <div className='container'>
        <h3>Asked by {author}</h3>
        <img
          src={avatar}
          alt={`Avatar of ${author}`}
          className='avatar'
        />
        <div className='question-info'>
          <div>{optionOne}</div>
          <div>or</div>
          <div>{optionTwo}</div>
          <h5>You Answered: {question[answer]}</h5>
          <div className='question-stats'>
            <div>"{optionOne}" received {optionOneVotes} of {totalVotes} votes ({(optionOneVotes / totalVotes) * 100}%)</div>
            <div>"{optionTwo}" received {optionTwoVotes} of {totalVotes} votes ({(optionTwoVotes / totalVotes) * 100}%)</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { question_id }) {
  const question = questions[question_id];

  return {
    question: question
      ? formatQuestion(question, users, authedUser)
      : null,
  }
}

export default connect(mapStateToProps)(QuestionStats);