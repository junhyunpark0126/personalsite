import { Box, Text, Flex, Image, Stack, StackDivider, Heading, Card, CardHeader, CardBody, Link } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const floatInAnimation = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export default function TableTennis() {
    return (
        <Flex align={"left"} direction="column">

            <Box p={4} mt={"20px"}>

                <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" mt={15} mb={5}>

                    <Box display="flex" justifyContent="center" alignItems="center" width={{ base: "100%", md: "500px" }} height="auto" mt={10} mr={{ md: "80px" }} css={{animation: `${floatInAnimation} 0.75s ease-out forwards`}}>
                    <Image
                        src="/actionshot.JPG"
                        borderRadius="15px"
                        alt="Action Shot"
                        objectFit="cover"
                    />
                    </Box>

                    <Box display="flex" justifyContent="center" alignItems="center" boxSize="300px" mt={10} ml={"150px"} css={{animation: `${floatInAnimation} 0.75s ease-out forwards`}}>
                    <Image
                        src="/pennpingpong.png"
                        borderRadius="15px"
                        alt="Jersey"
                        objectFit="cover"
                    />
                    </Box>

                </Flex>

                <Flex direction={{ base: "column", md: "row" }} align="center" justify="center">
                <Box mt={"70px"} align="center" justify="center">
                    <Text fontSize="17.5px">
                        Check out my page dedicated to table tennis!
                        <br></br> 
                        I've always loved table tennis, but I started playing more seriously around the start of 
                        high school, and it's been a journey ever since!
                    </Text>
                </Box>
                </Flex>

                <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" mt={15} mb={5}>

                <Card width="600px" mt={"60px"}>
                    <CardHeader>
                        <Heading size='md'>Gear and Stats</Heading>
                    </CardHeader>


                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='s' textTransform='uppercase'>
                            Blade
                            </Heading>
                            <Link href='https://shop.butterflyonline.com/viscaria-blade-7669p' isExternal>
                            Butterfly Viscaria ST<ExternalLinkIcon mx='2px' />
                            </Link>
                        </Box>
                        <Box>
                            <Heading size='s' textTransform='uppercase'>
                            Rubber
                            </Heading>
                            <Link href='https://shop.butterflyonline.com/tenergy-80' isExternal>
                            Butterfly Tenergy 80<ExternalLinkIcon mx='2px' />
                            </Link>
                        </Box>
                        <Box>
                            <Heading size='s' textTransform='uppercase'>
                            Shoes
                            </Heading>
                            <Text fontSize='15px'>
                            Whatever running shoes I'm currently wearing :)
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='s' textTransform='uppercase'>
                            USATT Rating
                            </Heading>
                            <Text fontSize='15px'>
                            1284
                            </Text>
                        </Box>
                        </Stack>
                    </CardBody>
                </Card>

                <Box display="flex" justifyContent="center" alignItems="center" boxSize="400px" mt={10} ml={"150px"}>
                    <Image
                        src="/blade.jpg"
                        alt="Viscaria Blade"
                        objectFit="cover"
                    />
                </Box>
                
                </Flex>

                <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" mt={15} mb={5}>

                    <Box mt="20px" mb="20px">
                        <iframe
                        src="https://drive.google.com/file/d/1BYOPPnY4AVjQJ_3yVpAHNVfuT1rGyKMJ/preview"
                        width="640"
                        height="480"
                        allow="autoplay"
                        style={{ border: 'none' }}
                        title="Pong 1"
                        ></iframe>
                    </Box>

                    <Box mt="20px" mb="20px"> 

                        <iframe
                        src="https://drive.google.com/file/d/1BYOPPnY4AVjQJ_3yVpAHNVfuT1rGyKMJ/preview"
                        width="640"
                        height="480"
                        allow="autoplay"
                        style={{ border: 'none' }}
                        title="Pong 2"
                        ></iframe>

                    </Box>

                </Flex>

                <Box>
                    <Text>More to Come!</Text>
                </Box>

            </Box>

        </Flex>
    );
}