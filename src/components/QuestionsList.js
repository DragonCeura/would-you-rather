import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from './Question';

class QuestionsList extends Component {
  render() {
    const { questionsArray, header } = this.props;

    return(
      <div>
        <h3>{header}</h3>
        {questionsArray.map((question) => (
          <Question key={question.id} question_id={question.id} />
        ))}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }, { questionsArray, header }) {
  return {
    authedUser,
    questionsArray,
    header,
  }
}

export default connect(mapStateToProps)(QuestionsList);
