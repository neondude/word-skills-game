/*
state = {
  letters: [],
  showIndex: [true,]
  userInput: ''
}
 */
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
        userInput: '',
        showIndex: new Array(6).fill(true)
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
  console.log('add letter', state, action)
  let letters = state.letters
  let showIndex = state.showIndex
  let userInput = state.userInput

  let inputPresent = false
  for(let i = 0; i < letters.length; i++) {
    console.log('add letter', letters[i], letters[i] == action.letter)
    if((letters[i] == action.letter) && showIndex[i] == true)
    {
      console.log('add letter', true)
      showIndex[i] = false
      userInput = state.userInput + action.letter
      inputPresent = true
      break;
    }
  }

  console.log('add letter', letters, showIndex, userInput)
  return inputPresent
    ? {
        letters,
        showIndex,
        userInput,
      }
    : state
}

const removeLetter = (state) => {
  if (state.userInput.length == 0) {
    return state
  }

  let letters = state.letters
  let showIndex = state.showIndex
  let userInput = state.userInput
  let lastLetter = state.userInput.charAt(state.userInput.length - 1)

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == lastLetter && showIndex[i] == false) {
      console.log('remove letter', true)
      showIndex[i] = true
      userInput =userInput.slice(0, -1)
      break
    }
  }
  let inputPresent = true

  // let lastLetter = state.userInput.charAt(state.userInput.length - 1)
  // let letters = state.letters
  // letters.push(lastLetter)
  // let userInput = state.userInput.slice(0, -1)

  return {
        letters,
        showIndex,
        userInput,
      }
}

const resetDisplay = (state) => {
  return {
    letters: state.letters,
    userInput: '',
    showIndex: new Array(6).fill(true)
  }
}

export { lettersReducer as default }