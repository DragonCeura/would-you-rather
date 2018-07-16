import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { formatQuestion } from '../utils/Utils';

class Question extends Component {
  render() {
    const { question } = this.props;

    const { avatar, author, id, optionOne, optionTwo, answer } = question;

    return(
      <Link to={`/question/${id}`} className='question'>
        <img
          src={avatar}
          alt={`Avatar of ${author}`}
          className='avatar'
        />
        <div className='question-info'>
          <div>{optionOne}</div>
          <div>or</div>
          <div>{optionTwo}</div>
          {answer ? <h5>Answered: {question[answer]}</h5> : null}
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(Question));
