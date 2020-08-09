import React, { useState, useEffect, useReducer, useContext } from 'react'
import Header from '../components/Header'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import useBackspaceKeyUp from '../hooks/useBackspaceKeyUp'
import useEnterKeyUp from '../hooks/useEnterKeyUp'
import { getWordData } from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import LettersContext from '../context/LettersContext'
import { Flex, Box, Card, Image, Heading, Link, Text } from 'rebass'



const GameController = ({ wordSet }) => {
  const pressedKey = useAlphaKeyUp()
  const pressedBackspace = useBackspaceKeyUp()
  const pressedEnter = useEnterKeyUp()
  const [score, setScore] = useState(0)
  const { letterDisplay, dispatchDisplay } = useContext(LettersContext)

  const submitWord = (userWord) => {
    console.log('submit word', wordSet, userWord, wordSet[userWord])

    // is len atleast 3
    if (userWord.length < 3) {
      return false
    }

    // is word in word list
    if (wordSet[userWord] == undefined) {
      return false
    }

    // is word already found
    //
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
  // return (
  //   <div>
  //     {pressedKey.code != undefined && <div>{pressedKey.code}</div>}
  //   </div>
  // )
}

export {GameController as default}