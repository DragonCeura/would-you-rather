import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }
  handleChange = (e) => {
    e.preventDefault();
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const { optionOne, optionTwo } = this.state;

    return (
      <div className='center'>
        <h3>Would You Rather</h3>
        <form className='new-question-form' onSubmit={this.handleSubmit}>
          <label>
            Option One:
            <input type='text' name='optionOne' />
          </label>
          <label>
            Option Two:
            <input type='text' name='optionTwo' />
          </label>
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' && optionTwo === ''}>
            Add Question
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(NewQuestion);
