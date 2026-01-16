"use client";

import Tree_section from "@/components/home/Tree_section";
import Footer from "@/components/Universal/Footer";
import Navigation from "@/components/Universal/Navigation";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      w="100%"
      minH="100vh"
      bgGradient="linear(to-r,  #026aa2, #35b6b4)"
    >
      <Navigation/>


      {/* Main Content */}
      <Tree_section />

      {/* Footer */}
      <Footer  />
    </Box>
  );
}
