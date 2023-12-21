import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Column from "./components/column";

function App() {
  return (
    <>
      <Heading fontSize={{base: "4xl", sm: "5xl", md: "6xl"}} fontWeight={"bold"} textAlign={"center"} bgGradient={"linear(to-l, #7928CA, #FF0080)"} bgClip={"text"} mt={4}>
        Welcome to Tick Tick Board
      </Heading>
      <Container maxWidth={"container.lg"} px={4} py={10}>
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={{ base: 16, md: 4 }}
        >
          {/* <Column column={"Todo"} />
          <Column column={"In Progress"} />
          <Column column={"Blocked"} />
          <Column column={"Completed"} /> */}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
