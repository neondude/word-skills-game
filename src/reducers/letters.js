const lettersReducer = (state, action) => {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case 'LOAD_WORD':
      return {
        letters: state.letters,
        userInput: ''
      }
    case 'ADD_LETTER':
      console.log('adding letter')
      return {
        letters:
          state.letters.indexOf(action.letter) > -1
            ? state.letters.splice(state.letters.indexOf(action.letter), 1)
            : state.letters,
        userInput: state.userInput + action.letter,
      }
    case 'REMOVE_LETTER':
      let letters = state.letters

      return {
        letters: state.letters,
        userInput: state.userInput.slice(0,-1)
      }
    case 'RESET':
      return {
        letters: state.letters,
        userInput: ''
      }
    default:
      return state
  }
}

export { lettersReducer as default }