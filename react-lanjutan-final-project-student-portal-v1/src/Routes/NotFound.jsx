import React from "react";
import { Box, Button, Center, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Center height="100vh" bg="red.500">
      <Box p={4} textAlign="center" color="white">
        <Box borderRadius="full" overflow="hidden" width="200px" height="200px" margin="0 auto">
          <Image src="https://png.pngtree.com/png-vector/20201224/ourmid/pngtree-error-404-page-not-found-png-image_2598541.jpg" alt="Page Not Found" width="100%" height="100%" objectFit="cover" />
        </Box>
        <Heading as="h1" size="xl" fontWeight="bold">
          404 | Page Not Found
        </Heading>
        <p>The requested page could not be found.</p>
        <Button colorScheme="blue" onClick={handleBackHome}>
          Take Me Back
        </Button>
      </Box>
    </Center>
  );
};

export default NotFound;
