import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Question Page
      </div>
    );
  }
}

export default connect()(QuestionPage);
