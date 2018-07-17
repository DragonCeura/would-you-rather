import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categorizeQuestions } from '../utils/Utils';

import Question from './Question';

const UNANSWERED = 'UNANSWERED';
const ANSWERED = 'ANSWERED';

class QuestionsList extends Component {
  state = {
    show: UNANSWERED,
  }

  changeLists = (e) => {
    e.preventDefault();
    const show = e.target.value;
    this.setState({
      show,
    })
  }

  render() {
    const { show } = this.state;
    const { authedUser, questions } = this.props;
    const { answered, unanswered } = categorizeQuestions(authedUser, questions);
    let hideUnanswered, hideAnswered;
    let selectedUnanswered, selectedAnswered;

    if (show === UNANSWERED) {
      hideUnanswered = '';
      selectedUnanswered = 'selected'
      hideAnswered = 'hide';
      selectedAnswered = '';
    } else if (show === ANSWERED) {
      hideUnanswered = 'hide';
      selectedUnanswered = ''
      hideAnswered = '';
      selectedAnswered = 'selected';
    }

    return(
      <div className='questionlist'>
        <div className='questionlist-headers-container'>
          <button
            className={`btn questionlist-header ${selectedUnanswered}`}
            value={UNANSWERED}
            onClick={this.changeLists}
            disabled={show === UNANSWERED}
          >
            Unanswered
          </button>
          <button
            className={`btn questionlist-header ${selectedAnswered}`}
            value={ANSWERED}
            onClick={this.changeLists}
            disabled={show === ANSWERED}
          >
            Answered
          </button>
        </div>
        <div className={`questionlist-unanswered ${hideUnanswered}`}>
          {unanswered.map((question) => (
            <Question key={question.id} question_id={question.id} />
          ))}
        </div>
        <div className={`questionlist-answered ${hideAnswered}`}>
          {answered.map((question) => (
            <Question key={question.id} question_id={question.id} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions: Object.values(questions),
  }
}

export default connect(mapStateToProps)(QuestionsList);
