"use client";

import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiDroplet, FiHeart, FiTrendingUp } from "react-icons/fi";
import AnimatedImage from "@/components/home/AnimatedImage";
import ValuePropositions from "@/components/home/ValuePropositions";
// import ProductionShowcase from "@/components/home/ProductionShowcase";
// import WellnessJourney from "@/components/home/WellnessJourney";
import OurStory from "@/components/home/OurStory";
import Categories from "@/components/home/Categories";
import Testimonials from "@/components/home/Testimonials";
import BlogHighlights from "@/components/home/BlogHighlights";
import CallToAction from "@/components/home/CallToAction";
import VideosSection from "@/components/home/VideosSection";
import Form from "@/components/home/Form";




// Motion wrapper
const MotionBox = motion(Box);

// SAFE data (no functions)
const highlights = [
  { icon: "heart", title: "Root Cause Analysis" },
  { icon: "trend", title: "Clinical Research Validation" },
  { icon: "droplet", title: "Software Driven  Management" },
];

// Icon map
const iconMap = {
  heart: FiHeart,
  trend: FiTrendingUp,
  droplet: FiDroplet,
};

export default function Tree_section() {
  return (
    <div>
      
      <Box
        bgGradient="linear(to-br, deepGreen, brand.700)"
        color="white"
        pt={{ base: 16, md: 28 }}
        pb={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        {/* Background glow */}
        <Box
          position="absolute"
          inset="0"
          bgImage="radial-gradient(circle at top right, rgba(226, 170, 111, 0.35), transparent 45%)"
        />

        {/* Animated container */}
        <MotionBox
          position="relative"
          maxW="1200px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 12, md: 16 }}
          >
            {/* LEFT CONTENT */}
            <Stack spacing={8} maxW="520px">
              {/* <Text
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="widest"
              color="whiteAlpha.700"
            >
              Ancient wisdom · Modern science
            </Text> */}

              <Heading
                fontSize={{ base: "2.4rem", md: "3.4rem" }}
                lineHeight="1.1"
              >
                Chronic Disease Management Through Functional Medicine
              </Heading>

              <Text  fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
                {/* Explore high-potency formulations, nutrition protocols, and
              personalized rituals designed to restore balance from the inside
              out. */}
              <div className=" flex font-bold text-2xl text-center  justify-center ">
                 INTEGRATING
              </div>
               <div className="flex font-bold text-center  justify-center">
                 Ancient wisdom  · Modern science · Nutrition 
               </div>
                <div className="flex font-bold text-center  justify-center ">
                   Lifestyle Approch · Herbal         Medication 
                </div>
              </Text>

              {/* CTA Buttons */}
              <HStack className="flex text-center justify-center" spacing={4} flexWrap="wrap">
                <Button
                  size="lg"
                  bg="#026aa2"
                  color="black"
                  rounded="full"
                  _hover={{ bg: "#afd4e6" }}
                  display="flex"
                  justifyContent="center"
                >
                  Book Now
                </Button>
              </HStack>

              {/* Highlights */}
              <Stack spacing={4} direction={{ base: "column", md: "row" }}>
                {highlights.map((item) => {
                  const IconComponent =
                    iconMap[item.icon as keyof typeof iconMap];

                  return (
                    <HStack
                    w={{  sm: "80%", md: "150", lg: "150" }}
                      key={item.title}
                      spacing={3}
                      bg="whiteAlpha.100"
                      px={4}
                      py={3}
                      rounded="xl"
                    >
                      <Icon as={IconComponent} boxSize={5} color="red" />
                      <Text className="" fontWeight="500">
                        {item.title}
                      </Text>
                    </HStack>
                  );
                })}
              </Stack>
            </Stack>

            {/* RIGHT IMAGE */}
            <Box position="relative">
              {/* Blur glow */}
              <Box
                position="absolute"
                inset="0"
                rounded="3xl"
                bg="whiteAlpha.200"
                filter="blur(60px)"
              />

              <AnimatedImage />

              <a
                  href="https://wa.me/9911024406"
                  target="_blank"
                  className="group fixed top-6 right-6 z-50"
                >
                  <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-0 rounded bg-black px-3 py-1 text-sm text-white transition-all group-hover:scale-100">
                    Chat on WhatsApp
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      className="h-8 w-8"
                      alt="WhatsApp"
                    />
                  </div>
                </a>
            </Box>
          </SimpleGrid>
        </MotionBox>
        <Form/>
      </Box>
      <ValuePropositions />
      {/* <ProductionShowcase/> */}
      {/* <WellnessJourney/> */}
      <OurStory />
      <Categories />
      <Testimonials />
      <VideosSection/>
      <BlogHighlights />
      <CallToAction/>
    </div>
  );
}
