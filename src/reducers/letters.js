const lettersReducer = (state, action) => {
  // console.log('letter reducer input', action, state)
  if (action.letter == undefined && action.letters == undefined)
  {
    // console.log('skip reduce', action, action.letters != undefined)
    return state
  }
  switch (action.type) {
    case 'LOAD_WORD':
      console.log('load word', action)
      return {
        letters: action.letters,
        userInput: ''
      }
    case 'ADD_LETTER':
      return addLetter(state, action)
    case 'REMOVE_LETTER':
      return removeLetter(state, action)
    case 'RESET':
      return resetDisplay(state)
    default:
      return state
  }
}

const addLetter = (state, action) => {
  let letters = state.letters
  if (letters.includes(action.letter)) {
    letters.splice(state.letters.indexOf(action.letter), 1)
  }
  else {
    return state
  }
  return {
    letters,
    userInput: state.userInput + action.letter,
  }
}

const removeLetter = (state) => {
  if (state.userInput.length == 0) {
    return state
  }
  let lastLetter = state.userInput.charAt(state.userInput.length - 1)
  let letters = state.letters
  letters.push(lastLetter)
  let userInput = state.userInput.slice(0, -1)

  return {
    letters,
    userInput
  }
}

const resetDisplay = (state) => {
  let userInputLetters = state.userInput.split("")
  let letters = state.letters.concat(userInputLetters)
  return {
    letters,
    userInput: ''
  }
}

export { lettersReducer as default }