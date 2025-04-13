import { Flex, Heading, Image } from "@chakra-ui/react"

function Navbar() {

  return (
    <Flex
      justify="flex-start"
      position="sticky"
      color="white"
      align="center"
      bg="gray.300"
      w="100%"
      top={0}
      p={4}
      gap={4}
    >
      <Image height={{ base: "3em", md: "3.5em" }} src="/assets/images/PEIPotatoLogo.png" />
      <Heading size={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} color="black">PEI Potato Market Track</Heading>
    </Flex>
  )
}

export default Navbar
