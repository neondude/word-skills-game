import React, { useState, useEffect, useReducer, useContext } from 'react'
import Header from '../components/Header'
import MainGame from '../components/MainGame'
import useAlphaKeyUp from '../hooks/useAlphaKeyUp'
import useBackspaceKeyUp from '../hooks/useBackspaceKeyUp'
import useEnterKeyUp from '../hooks/useEnterKeyUp'
import {getWordData} from '../utils/WordData'
import lettersReducer from '../reducers/letters'
import LettersContext from '../context/LettersContext'
import { Flex, Box, Card, Image, Heading, Link, Text } from 'rebass'

const WordSkillsApp = () => {

  return (
    <>
      <Header/>
      <MainGame />
    </>
  )
}

export { WordSkillsApp as default }