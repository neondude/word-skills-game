import React, { useState, useEffect, useReducer, useContext } from 'react'
import Header from '../components/Header'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import useBackspaceKeyUp from '../hooks/useBackspaceKeyUp'
import useEnterKeyUp from '../hooks/useEnterKeyUp'
import { getWordData } from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import GameContext from '../context/GameContext'
import { Flex, Box, Card, Image, Heading, Link, Text, Button } from 'rebass'


const LetterDisplay = () => {
  const { letterDisplay } = useContext(GameContext)

  useEffect(()=>{
    console.log('game controller', letterDisplay)
  },[letterDisplay])
  return (
    <>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        mx={2}
        my={5}
        minHeight={128}
      >
        {letterDisplay.letters.map((letter, index) => {
          return (
            <Box key={index} width={1 / 6} px={2}>
              <Box
                m="auto"
                p={4}
                sx={{
                  borderStyle: 'solid',
                  borderRadius: '1em',
                  transition: 'all 1s',
                }}
              >
                <Text
                  sx={{
                    textTransform: 'uppercase',
                  }}
                  fontSize={6}
                  color="white"
                >
                  {letter}
                </Text>
              </Box>
            </Box>
          )
        })}
      </Flex>
    </>
  )
  // return (<div>{letterDisplay.letters.join()}</div>)
}

export {LetterDisplay as default}