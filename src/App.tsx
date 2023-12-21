import { Container, Heading } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Heading fontSize={{base: "4xl", sm: "5xl", md: "6xl"}} fontWeight={"bold"} textAlign={"center"} bgGradient={"linear(to-l, #7928CA, #FF0080)"} bgClip={"text"} mt={4}>
        Welcome to Tick Tick Board
      </Heading>
      <Container maxWidth={"container.lg"} px={4} py={10}>

      </Container>
    </>
  );
}

export default App;
