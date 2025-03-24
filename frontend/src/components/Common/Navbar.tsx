import { Flex, Heading } from "@chakra-ui/react"

function Navbar() {

  return (
    <Flex
      justify="space-between"
      position="sticky"
      color="white"
      align="center"
      bg="gray.300"
      w="100%"
      top={0}
      p={4}
    >
      <Heading size={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} color="black">PEI Spud Market Track</Heading>
    </Flex>
  )
}

export default Navbar
