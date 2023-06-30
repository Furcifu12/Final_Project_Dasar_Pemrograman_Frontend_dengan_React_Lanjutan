import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="#f2f2f2">
      <Flex alignItems="center" justifyContent="space-between" px={4} py={2}>
        <Text as="h1" data-testid="home-page" fontWeight="bold" fontSize="xl">
          <Link as={ReachLink} to="/student" data-testid="student-btn" color="blue" textDecoration="none">
            Student Portal
          </Link>
        </Text>
        <Flex as="ul" listStyleType="none" m={0} p={0}>
          <Box bg="blue" borderRadius="md" p={2} mx={2}>
            <li>
              <Link as={ReachLink} to="/student" data-testid="student-page" color="white" textDecoration="none">
                All Students
              </Link>
            </li>
          </Box>
          <Box bg="blue" borderRadius="md" p={2} mx={2}>
            <li>
              <Link as={ReachLink} to="/add" data-testid="add-page" color="white" textDecoration="none">
                Add Student
              </Link>
            </li>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
