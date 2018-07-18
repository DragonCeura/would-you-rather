/*
example question
{
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  timestamp: 1467166872634,
  optionOne: {
    votes: ['sarahedo'],
    text: 'have horrible short term memory',
  },
  optionTwo: {
    votes: [],
    text: 'have horrible long term memory'
  }
}

example user
{
  id: 'tylermcginnis',
  name: 'Tyler McGinnis',
  avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
  answers: {
    "vthrdm985a262al8qx3do": 'optionOne',
    "xj352vofupe1dqz9emx13r": 'optionTwo',
  },
  questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
}
*/
export function formatQuestion(question, users, authedUser) {
  const { id, author, optionOne, optionTwo } = question;
  const { answers } = users[authedUser];
  const { avatarURL } = users[author];
  return {
    id,
    author: users[author].name,
    avatar: avatarURL,
    optionOne: optionOne.text,
    optionOneVotes: optionOne.votes.length,
    optionTwo: optionTwo.text,
    optionTwoVotes: optionTwo.votes.length,
    answer: answers[id]
      ? answers[id]
      : null,
  }
}

export function userAnsweredQuestion(user, question) {
  return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
}

export function categorizeQuestions(authedUser, questions) {
  let answered = questions.filter((question) => userAnsweredQuestion(authedUser, question))
    .sort((a, b) => b.timestamp - a.timestamp);
  let unanswered = questions.filter((question) => !userAnsweredQuestion(authedUser, question))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    answered,
    unanswered
  }
}

// Leaderboard helpers
export function numQuestionsAnswered(user) {
  return Object.values(user.answers).length;
}

export function numQuestionsAsked(user) {
  return user.questions.length;
}

export function userScore(user) {
  const questionsAnswered = numQuestionsAnswered(user);
  const questionsAsked = numQuestionsAsked(user);

  return questionsAnswered + questionsAsked;
}
