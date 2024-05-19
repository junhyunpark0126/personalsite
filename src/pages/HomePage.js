import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

export default function HomePage() {
  const names = ['Jun Hyun', 'Andrew'];
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slide-in');

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

        <Box display="flex" justifyContent="center" alignItems="center" boxSize="300px" mt={6}>
        <Image
            borderRadius="full"
            boxSize="full"
            src="/jhp.png"
            alt="Jun Hyun Park Cover"
            objectFit="cover"
        />
        </Box>
    </Flex>
  );
}
