import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleAddQuestion } from '../actions/shared';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatchAddQuestion } = this.props;

    dispatchAddQuestion(optionOne, optionTwo);

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))
  }
  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='center'>
        <h3>Would You Rather</h3>
        <form className='new-question-form' onSubmit={this.handleSubmit}>
          <label>
            Option One:
            <input
              type='text'
              name='optionOne'
              onChange={this.handleChange}
              value={optionOne}
            />
          </label>
          <label>
            Option Two:
            <input
              type='text'
              name='optionTwo'
              onChange={this.handleChange}
              value={optionTwo}
            />
          </label>
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
            Add Question
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddQuestion: (optionOne, optionTwo) => {dispatch(handleAddQuestion(optionOne, optionTwo))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
