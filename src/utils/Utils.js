function formatQuestion(question, users, authedUser) {
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

function userAnsweredQuestion(user, question) {
  return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
}

function categorizeQuestions(authedUser, questions) {
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
function numQuestionsAnswered(user) {
  return Object.values(user.answers).length;
}

function numQuestionsAsked(user) {
  return user.questions.length;
}

function userScore(user) {
  const questionsAnswered = numQuestionsAnswered(user);
  const questionsAsked = numQuestionsAsked(user);

  return questionsAnswered + questionsAsked;
}

// Question stats helpers
function computePercentage(optionVotes, totalVotes) {
  return ((optionVotes / totalVotes) * 100).toFixed(2);
}

function computeValues(question) {
  const { optionOneVotes, optionTwoVotes } = question;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return {
    optionOnePercent: computePercentage(optionOneVotes, totalVotes),
    optionTwoPercent: computePercentage(optionTwoVotes, totalVotes),
    totalVotes
  }
}

export {
  formatQuestion,
  userAnsweredQuestion,
  categorizeQuestions,
  numQuestionsAnswered,
  numQuestionsAsked,
  userScore,
  computeValues,
}
