/*
state = {
  score: 0
}
*/
const scoreReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {
        score: state.score + action.wordScore
      }
    case 'RESET':
      return {
        score: 0
      }
  }
}

export {scoreReducer as default}