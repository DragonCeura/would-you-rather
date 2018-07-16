import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categorizeQuestions } from '../utils/Utils';

import QuestionsList from './QuestionsList';

class Dashboard extends Component {
  render() {
    console.log('dashboard props:', this.props);
    const { authedUser, users, questions } = this.props;
    const { answered, unanswered } = categorizeQuestions(authedUser, questions);

    // TODO: Render all questions categorized as answered vs. unanswered.
    console.log('Answered questions:', answered);
    console.log('Unanswered questions:', unanswered);

    return (
      <div className='container'>
        <h3 className='center'>{users[authedUser].name}, would you rather...</h3>
        <QuestionsList questionsArray={answered} header="Answered Questions" />
        <QuestionsList questionsArray={unanswered} header="Unanswered Questions" />
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions: Object.values(questions),
  }
}

export default connect(mapStateToProps)(Dashboard);
