import React from 'react'
import { Flex, Box, Card, Image, Heading, Link, Text } from 'rebass'

const Header = () => {
  return (
    <Flex px={4} color="white" bg="black" alignItems="center">
      <Text p={2} fontWeight="bold">
        Rebass
      </Text>
      <Box mx="auto" />
      <Link variant="nav" href="#!">
        Profile
      </Link>
    </Flex>
  )
}

export {Header as default}