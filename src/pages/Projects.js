import { Box, Text, Flex, Image, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


export default function Projects() {
    return (
        <Flex align={'left'} direction='column'>

            <Box p={4} ml={"100px"} mt={"20px"}>

                <Box>
                    <Text fontSize="4xl" fontWeight="bold">Projects</Text>
                </Box>

                <Box mt={"40px"}>
                    <Text fontSize="25px" as='u' >weasel</Text>
                    <Text fontSize="17px" mt="8px">
                        Web application that enables users to discover new artists and genres based on an artist's
                        statistics and their collaboration with other artists.
                    </Text>

                    <Box mt="20px" mb="20px">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ASowhSfDmdI"
                            title="weasel"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </Box>

                    <Text fontSize="17px" mt="8px">
                        Technologies Used: Node.js, Neo4j, MySQL, React
                    </Text>
                </Box>

                <Box mt={"40px"}>
                    <Text fontSize="25px" as='u' >NohPT</Text>
                    <Text fontSize="17px" mt="8px">
                        Brings novels to life by leveraging generative AI to produce image visualizations
                        and audio narration of books inputted by the user.
                    </Text>

                    <Box mt="20px" mb="20px">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/-aKZk4vMKX0"
                            title="NohPT"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </Box>

                    <Text fontSize="17px" mt="8px">
                        Technologies Used: XTTS V2, DALL-E, Django, React
                    </Text>
                </Box>

                <Box mt={"40px"}>
                    <Text fontSize="25px" as='u' >Fraudulent Transaction Detection</Text>
                    <Text fontSize="17px" mt="8px">
                        Created in order to assist financial institutions in reducing monetary losses 
                        from fraudulent transactions
                    </Text>
                    <Box mt="20px">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/qAexZdwfQ0M"
                            title="Fraudulent Transaction Detection Video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </Box>
                    <Box mt={4}>
                        <Link href='https://github.com/junhyunpark0126/fraud-detection' isExternal>
                            Access the Notebook Here <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Box>
                </Box>

                <Box mt={"30px"}>
                    <Text fontSize="25px" as='u' >LC4 Simulator</Text>
                    <Text fontSize="17px" mt="8px" maxWidth="800px">
                        Implemented C program that simulates the LC4 machine by parsing, assembling, and disassembling .OBJ files using custom Linked Lists, HashMaps, working directly with data memory.
                        Deals with Assembly.
                    </Text>
                    <Box display="flex" justifyContent="left" alignItems="center" mt={3} mb={3}>
                        <a href="https://github.com/junhyunpark0126/little-computer-4-simulator" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/lc4.png"
                            alt="LC4"
                            objectFit="cover"
                            width="50%"
                            height="50%"
                            border="1px"
                        />
                        </a>
                    </Box>
                    <Text mb={3}>
                        The LC4 is an upgraded version of the Little Computer 3
                    </Text>
                </Box>

            </Box>

        </Flex>
    );
}