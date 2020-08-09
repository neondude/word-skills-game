
const getScore = (wordLen) => {
  switch(wordLen) {
    case 3:
      return 3
    case 4:
      return 4
    case 5:
      return 5
    case 6:
      return 6
    default:
      return 0

  }
}

export {getScore as default}