import React, { useState, useEffect, useReducer, useContext } from 'react'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import useBackspaceKeyUp from '../hooks/useBackspaceKeyUp'
import useEnterKeyUp from '../hooks/useEnterKeyUp'
import GameContext from '../context/GameContext'


const GameController = () => {
  const pressedKey = useAlphaKeyUp()
  const pressedBackspace = useBackspaceKeyUp()
  const pressedEnter = useEnterKeyUp()
  const [score, setScore] = useState(0)
  const { letterDisplay, dispatchDisplay } = useContext(GameContext)
  const { wordList, dispatchWordList } = useContext(GameContext)

  const submitWord = (userWord) => {
    // console.log('submit word',wordList)
    // is len atleast 3
    if (userWord.length < 3) {
      return false
    }

    // word not in list
    if (!wordList.notfound.includes(userWord)) {
      return false
    }

    dispatchWordList({
      type: 'WORD_FOUND',
      word: userWord,
    })
    return true
  }

  useEffect(() => {
    dispatchDisplay({
      type: 'REMOVE_LETTER',
      letter: pressedBackspace,
    })
  }, [pressedBackspace])

  useEffect(() => {
    if (submitWord(letterDisplay.userInput)) {
      dispatchDisplay({
        type: 'RESET',
        letter: pressedEnter,
      })
    }
  }, [pressedEnter])

  useEffect(() => {
    dispatchDisplay({
      type: 'ADD_LETTER',
      letter: pressedKey.key,
    })
  }, [pressedKey])

  return <></>
}

export {GameController as default}