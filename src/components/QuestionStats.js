import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { formatQuestion, computeValues } from '../utils/Utils';

const QuestionStats = ({ question }) => {
  const { optionOne, optionOneVotes, optionTwo, optionTwoVotes, answer } = question;
  const { optionOnePercent, optionTwoPercent, totalVotes } = computeValues(question);

  return (
    <div className='question-info'>
      <div>{optionOne}</div>
      <div>or</div>
      <div>{optionTwo}</div>
      <h5>You Answered: {question[answer]}</h5>
      <div className='question-stats'>
        <div>"{optionOne}" received {optionOneVotes} of {totalVotes} votes ({optionOnePercent}%)</div>
        <div>"{optionTwo}" received {optionTwoVotes} of {totalVotes} votes ({optionTwoPercent}%)</div>
      </div>
    </div>
  )
}

QuestionStats.propTypes = {
  question: PropTypes.object
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
