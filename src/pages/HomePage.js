import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Flex, Icon } from '@chakra-ui/react';

import { ArrowDownIcon } from '@chakra-ui/icons'

export default function HomePage() {
  const names = ['Jun Hyun', 'Andrew'];
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slide-in');

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('slide-out');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % names.length);
        setAnimationClass('slide-in');
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <Flex align={'center'} direction='column'>
        <Box p={5} textAlign="center">
          <Text fontSize="3xl">
              Hello, I'm
          </Text>
          <Text fontSize="5xl" fontWeight="bold" className={animationClass} color='#50a2fa'>
              {names[index]}
          </Text>
          <Text fontSize="5xl" fontWeight="bold" color='#50a2fa'>Park</Text>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" boxSize="300px">
          <Image
              borderRadius="full"
              boxSize="full"
              src="/jhp.png"
              alt="Jun Hyun Park Cover"
              objectFit="cover"
          />
        </Box>

        <Icon as={ArrowDownIcon} boxSize={7} mt={6} onClick={scrollToBottom} cursor="pointer" />

        <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" mt={15} mb={5}>
            <Box p={5}>
              <Text fontSize="3xl" fontWeight="bold">
                About Me
              </Text>
              <Text lineHeight="tall" maxWidth="500px" mr={10}>
                  Hey! I'm Jun Hyun (Andrew) Park, and I'm currently pursuing both a Bachelor and Master 
                  of Engineering in Computer Science at the University of Pennsylvania. I'm passionate about
                  software engineering, systems, and machine learning!

                  <br /> <br />

                  My experiences include working as a ___ intern at Tyson Foods, where I ____. I've also helped out with bone
                  metabolism disorder research when I worked for Penn Medicine as a data analyst and machine learning intern. 

                  <br /> <br />

                  Outside of computer science, I love playing table tennis competitively (check out my table tennis page!!),
                  going outside for some soccer, and hitting the gym! Feel free to reach out via my socials 👍
              </Text>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" boxSize="300px" mt={10}>
              <Image
                  borderRadius="30"
                  boxSize="full"
                  src="/jhp2.png"
                  alt="Jun Hyun Park 2 Cover"
                  objectFit="cover"
              />
            </Box>
        </Flex>

    </Flex>
  );
}
