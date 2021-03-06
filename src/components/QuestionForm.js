import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { handleAnswerQuestion } from '../actions/shared';
import { formatQuestion } from '../utils/Utils';

class QuestionForm extends Component {
  static propTypes = {
    authedUser: PropTypes.string.isRequired,
    question: PropTypes.object,
    question_id: PropTypes.string.isRequired,
    dispatchAnswerQuestion: PropTypes.func.isRequired,
  }

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
    const { dispatchAnswerQuestion, authedUser, question_id } = this.props;

    const info = {
      authedUser,
      qid: question_id,
      answer: selectedAnswer,
    }

    dispatchAnswerQuestion(info);
  }
  render() {
    const { selectedAnswer } = this.state;
    const { question, question_id } = this.props;
    const { optionOne, optionTwo } = question;
    return (
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
          OR
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
    )
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

function mapDispatchToProps(dispatch) {
  return {
    dispatchAnswerQuestion: (info) => {dispatch(handleAnswerQuestion(info))},
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionForm));
