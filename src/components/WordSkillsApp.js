import React, { useState, useEffect, useReducer, useContext } from 'react'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import {getWordData} from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import LettersContext from '../context/LettersContext'

const LetterDisplay = () => {
  const { letterDisplay } = useContext(LettersContext)
  return <div>{letterDisplay.letters.join()}</div>
}

const UserInputDisplay = () => {
  const { letterDisplay } = useContext(LettersContext)
  
  return (
    <div>{letterDisplay.userInput}</div>
  )
}


const GameController = () => {
  const pressedKey = useAlphaKeyUp()
  const { letterDisplay, dispatchDisplay } = useContext(LettersContext)
  const submitWord = () => {
    return true
  }

  useEffect(() => {

    if(pressedKey.code == undefined) {
      return
    }

    let doAction

    if (pressedKey.code === 'Backspace') {
      doAction = 'REMOVE_LETTER'
    }
    else if (pressedKey.code === 'Enter') {
      if(submitWord()){
        doAction = 'RESET'
      }
    }
    else {
      if(letterDisplay.letters.includes(pressedKey.key)) {
        doAction = 'ADD_LETTER'
      }
    }

    dispatchDisplay({
      type: doAction,
      letter: pressedKey.key,
    })

  },[pressedKey])

  return (
    <div>
      {pressedKey.code != undefined && <div>{pressedKey.code}</div>}
      <LetterDisplay />
      <UserInputDisplay />
    </div>
  )
}

const WordSkillsApp = () => {
  const [letterDisplay, dispatchDisplay] = useReducer(lettersReducer, {}, ()=> ({
      letters: getWordData().word,
      userInput: '',
    }))


  return (
    <LettersContext.Provider value={{ letterDisplay, dispatchDisplay }}>
      <h1>Title</h1>
      <GameController/>
      
    </LettersContext.Provider>
  )
}

export { WordSkillsApp as default }