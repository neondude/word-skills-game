import React, { useState, useEffect, useReducer, useContext } from 'react'
import GameController from '../components/GameController'
import LetterDisplay from '../components/LetterDisplay'
import UserInputDisplay from '../components/UserInputDisplay'
import WordListDisplay from '../components/WordListDisplay'
import { totalFiles } from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import wordListReducer from '../reducers/wordList'
import GameContext from '../context/GameContext'
import { Flex, Box, Card, Image, Heading, Link, Text, Button } from 'rebass'
import axios from 'axios'
import scoreReducer from '../reducers/score'
import { useHistory } from 'react-router-dom'


const MainGame = () => {
  let history = useHistory()
  const [letterDisplay, dispatchDisplay] = useReducer(lettersReducer,{letters: [], userInput: ''})
  const [wordList, dispatchWordList] = useReducer(wordListReducer,{found:[], notfound:[]})
  const [score, dispatchScore] = useReducer(scoreReducer, {score: 0})

  const changePage = ()=>{
    history.push({
      pathname:'/result',
      state: {
        value:wordList.notfound
      }
    })

  }

  useEffect(() => {

    let randomJsonFile = `${Math.floor(Math.random() * totalFiles) + 1 }.json`

    axios
      .get(`/worddb/${randomJsonFile}`)
      .then((response) => {
        let wordJSON = response.data
        let wordData = wordJSON[Math.floor(Math.random() * wordJSON.length)]

        dispatchDisplay({
          type: 'LOAD_WORD',
          letters: wordData.word,
        })

        dispatchWordList({
          type: 'LOAD_LIST',
          notfound: wordData.subset,
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })    

  }, [])
  return (
    <>
      <GameContext.Provider
        value={{
          letterDisplay,
          dispatchDisplay,
          wordList,
          dispatchWordList,
          score,
          dispatchScore,
        }}
      >
        <Flex mx={2}>
          <Box width={1 / 2} px={2}>
            <Text
              py={3}
              sx={{
                textTransform: 'uppercase',
              }}
              fontWeight={600}
              fontSize={4}
              color="white"
            >
              {wordList.notfound.length} words not found
            </Text>
            <Text
              py={3}
              sx={{
                textTransform: 'uppercase',
              }}
              fontSize={6}
              fontWeight={600}
              color="white"
            >
              Score: {score.score}
            </Text>
            <Button
              sx={{
                borderStyle: 'solid',
                borderRadius: '1em',
                transition: 'all 1s',
                background: 'white',
                color: 'black',
              }}
              mx={2}
              onClick={changePage}
            >
              End Game
            </Button>
          </Box>
          <Box my="auto" width={1} px={2}>
            <GameController />
            <LetterDisplay />
            <UserInputDisplay />
          </Box>
          <Box width={1 / 2} px={2}>
            <WordListDisplay
              title="Words Found"
              words={wordList.found}
              redact={false}
            />
          </Box>
        </Flex>
      </GameContext.Provider>
    </>
  )
}

export {MainGame as default}