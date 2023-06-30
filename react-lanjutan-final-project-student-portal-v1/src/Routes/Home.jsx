import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, Heading, Box } from "@chakra-ui/react";

const Home = () => {
    return (
        <div>
            <Center height="90vh">
                <Box
                    bgImage="url('https://wallpaperaccess.com/full/4485944.jpg')"
                    bgSize="cover"
                    bgPosition="center"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p={8}
                    borderRadius="md"
                    boxShadow="md"
                    textAlign="center"
                    width="100%"
                    height="100%"

                >
                    <Heading as="h2" size="xl" fontWeight="bold" color="white">
                        Welcome to Student Portal
                    </Heading>
                    <Link to="/student" data-testid="student-btn">
                        <Button colorScheme="red">All Student</Button>
                    </Link>
                </Box>
            </Center>
        </div>
    );
};

export default Home;