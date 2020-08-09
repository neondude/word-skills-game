/*
state= {
  found: []
  notfound: []
}
*/

const wordListReducer = (state, action) =>{
  switch (action.type) {
    case 'LOAD_LIST':
      return {
        notfound: action.notfound,
        found: []
      }
    case 'WORD_FOUND':
      return wordFound(state, action)
    
    default:
      return state
  }

}

const wordFound = (state, action) => {
  let found = state.found
  let notfound = state.notfound
  notfound.splice(notfound.indexOf(action.word), 1)
  found.push(action.word)

  return {
    found,
    notfound
  }
}

export { wordListReducer as default}