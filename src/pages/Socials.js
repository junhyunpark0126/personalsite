import { Box, Flex, Image, Link } from '@chakra-ui/react';

export default function Socials() {
    return (
        <Flex align="center" justify="center" height="80vh">
            <Box>
                <Flex gap="70px">
                    <Link href="https://www.linkedin.com/in/junhyunpark1" isExternal>
                        <Image src="/linkedin.png" alt="LinkedIn" boxSize="100px" objectFit="contain"/>
                    </Link>
                    <Link href="https://github.com/junhyunpark0126" isExternal>
                        <Image src="/github-mark.png" alt="GitHub" boxSize="100px" objectFit="contain"/>
                    </Link>
                    <Link href="mailto:andrewpp@seas.upenn.edu">
                        <Image src="/gmail.png" alt="Gmail" boxSize="100px" objectFit="contain" ml={"8px"}/>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
}