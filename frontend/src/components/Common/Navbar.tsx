import { Flex, Heading, Image } from "@chakra-ui/react"

function Navbar() {

  return (
    <Flex
      justify="flex-start"
      position="sticky"
      color="white"
      align="center"
      bg="gray.100"
      w="100%"
      shadow="md"
      top={0}
      p={4}
      gap={4}
      zIndex={1}
    >
      <Image height={{ base: "3em", md: "3.5em" }} src="/assets/images/PEIPotatoLogo.png" />
      <Heading size={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} color="black">PEI Potato Market Track</Heading>
    </Flex>
  )
}

export default Navbar
