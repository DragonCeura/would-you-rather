import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { formatQuestion } from '../utils/Utils';

import QuestionForm from './QuestionForm';
import QuestionStats from './QuestionStats';

class QuestionPage extends Component {

  render() {

    const { question, question_id } = this.props;

    if (question === null) {
      return (<Redirect to='/PageNotFound' />);
    }

    const { avatar, author, answer } = question;

    return (
      <div className='container'>
        <div className='questionpage'>
          <h3>Asked by {author}</h3>
          <div className='questionpage-info'>
            <img
              src={avatar}
              alt={`Avatar of ${author}`}
              className='avatar'
            />
            {answer === null
              ? <QuestionForm question_id={question_id}/>
              : <QuestionStats question_id={question_id} />}
            </div>
        </div>
      </div>
    );
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
