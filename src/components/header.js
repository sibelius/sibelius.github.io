import { Link } from "gatsby"
import React from "react";
import styled from 'styled-components';
import { Text, Flex } from 'rebass';

import sibelius from '../images/sibelius.png';

import GithubIcon from '../assets/github.svg';
import LinkedIcon from '../assets/linkedin.svg';
import MediumIcon from '../assets/medium.svg';
import TwitterIcon from '../assets/twitter.svg';

const Header = ({ siteTitle }) => (
  <header>
    <Flex
      flex={1}
      alignItems='center'
      justifyContent='center'
      mt={40}
      flexDirection='column'
    >
      <Flex flexDirection='column' alignItems='center'>
        <img src={sibelius} width={100} height={100}/>
        <Text as='h1' fontSize={30}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Text>
      </Flex>
      <Flex justifyContent='space-around'>
        <Flex mr={10}>
          <a href="https://github.com/sibelius">
            <GithubIcon/>
          </a>
        </Flex>
        <Flex mr={10}>
          <a href="http://twitter.com/sseraphini">
            <TwitterIcon />
          </a>
        </Flex>
        <Flex mr={10}>
          <a href="https://www.linkedin.com/in/sibeliusseraphini/">
            <LinkedIcon/>
          </a>
        </Flex>
        <Flex mr={10}>
          <a href="https://medium.com/@sibelius">
            <MediumIcon/>
          </a>
        </Flex>
      </Flex>
    </Flex>
  </header>
);

export default Header
