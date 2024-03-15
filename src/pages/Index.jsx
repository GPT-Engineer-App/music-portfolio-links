import React from "react";
import { Box, VStack, Heading, Text, Image, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube, FaAmazon, FaSpotify, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="red" minH="100vh" py={8}>
      <VStack spacing={8}>
        <Image src="https://images.unsplash.com/photo-1659150140178-d672b4763fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDQ2MjMwOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Musician Portrait" borderRadius="full" boxSize="200px" />
        <Heading as="h1" size="2xl">
          2star
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="500px">
          Welcome to my personal music portfolio website. Check out my music on various platforms and connect with me on social media!
        </Text>
        <HStack spacing={4}>
          <Link href="https://www.facebook.com/yourusername" isExternal>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" size="lg" colorScheme="facebook" />
          </Link>
          <Link href="https://www.instagram.com/yourusername" isExternal>
            <IconButton icon={<FaInstagram />} aria-label="Instagram" size="lg" colorScheme="pink" />
          </Link>
          <Link href="https://www.youtube.com/yourusername" isExternal>
            <IconButton icon={<FaYoutube />} aria-label="YouTube" size="lg" colorScheme="red" />
          </Link>
          <Link href="https://www.amazon.com/yourusername" isExternal>
            <IconButton icon={<FaAmazon />} aria-label="Amazon" size="lg" colorScheme="orange" />
          </Link>
          <Link href="https://www.audiomax.com/yourusername" isExternal>
            <IconButton icon={<FaSpotify />} aria-label="Audiomax" size="lg" colorScheme="green" />
          </Link>
          <Link href="https://www.spotify.com/yourusername" isExternal>
            <IconButton icon={<FaSpotify />} aria-label="Spotify" size="lg" colorScheme="green" />
          </Link>
          <Link href="https://www.applemusic.com/yourusername" isExternal>
            <IconButton icon={<FaApple />} aria-label="Apple Music" size="lg" colorScheme="gray" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
