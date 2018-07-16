import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { userAnsweredQuestion, formatQuestion } from '../utils/Utils';

class QuestionPage extends Component {
  render() {
    console.log(this.props);

    const { authedUser, question, question_id } = this.props;

    const { avatar, author, id, optionOne, optionOneVotes, optionTwo, optionTwoVotes, answer } = question;

    const totalVotes = optionOneVotes + optionTwoVotes;

    if (answer === null) {
      return (
        <div className='container'>
          <h3>Asked by {author}</h3>
          <img
            src={avatar}
            alt={`Avatar of ${author}`}
            className='avatar'
          />
          <form className='question-form'>
            <label>
              <input type='radio' name={`${question_id}_answer`} value={optionOne} />
              {optionOne}
            </label>
            <label>
              <input type='radio' name={`${question_id}_answer`} value={optionTwo} />
              {optionTwo}
            </label>
          </form>
        </div>
      );
    } else {
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
              <div>"{optionOne}" received {optionOneVotes} of {totalVotes} votes</div>
              <div>"{optionTwo}" received {optionTwoVotes} of {totalVotes} votes</div>
            </div>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users, authedUser)
      : null,
    question_id,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
