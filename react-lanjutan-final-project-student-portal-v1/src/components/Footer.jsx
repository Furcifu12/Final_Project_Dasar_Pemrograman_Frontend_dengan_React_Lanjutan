import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/not-found";

  if (isNotFoundPage) {
    return null;
  }

  return (
    <Box
      as="footer"
      className="footer"
      width="100%"
      textAlign="center"
      bg="#f2f2f2"
      padding="1rem"
      position="relative"
      zIndex="999"
    >
      <Box maxWidth="md" margin="0 auto">
        <Center>
          <p className="studentName" fontWeight="bold" fontSize="md">
            Muhamad Aldo Fernanda
          </p>
          <Box as="span" marginX="0.5rem" fontWeight="bold" fontSize="md">
            -
          </Box>
          <p className="studentId" fontSize="md">
            FE5610889
          </p>
        </Center>
      </Box>
    </Box>
  );
};

export default Footer;
