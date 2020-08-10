
export const getScore = (wordLen) => {
  switch(wordLen) {
    case 3:
      return 5
    case 4:
      return 10
    case 5:
      return 20
    case 6:
      return 100
    default:
      return 0

  }
}

