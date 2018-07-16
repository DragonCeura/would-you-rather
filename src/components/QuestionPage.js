import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleAnswerQuestion } from '../actions/shared';
import { formatQuestion } from '../utils/Utils';

import QuestionStats from './QuestionStats';

class QuestionPage extends Component {
  state = {
    selectedAnswer: '',
  }

  handleChange = (e) => {
    const answer = e.target.value;

    this.setState({
      selectedAnswer: answer,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedAnswer } = this.state;
    const { dispatch, authedUser, question_id } = this.props;

    const info = {
      authedUser,
      qid: question_id,
      answer: selectedAnswer,
    }

    dispatch(handleAnswerQuestion(info));
  }

  render() {
    const { selectedAnswer } = this.state;

    const { question, question_id } = this.props;

    const { avatar, author, optionOne, optionTwo, answer } = question;

    if (answer === null) {
      return (
        <div className='container'>
          <h3>Asked by {author}</h3>
          <img
            src={avatar}
            alt={`Avatar of ${author}`}
            className='avatar'
          />
          <form className='question-form' onSubmit={this.handleSubmit}>
            <label>
              <input
                type='radio'
                name={`${question_id}_answer`}
                value='optionOne'
                onChange={this.handleChange}
              />
              {optionOne}
            </label>
            <label>
              <input
                type='radio'
                name={`${question_id}_answer`}
                value='optionTwo'
                onChange={this.handleChange}
              />
              {optionTwo}
            </label>
            <button
              className='btn'
              type='submit'
              disabled={selectedAnswer===''}>
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <QuestionStats question_id={question_id}/>
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
