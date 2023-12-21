import { Badge, Box, Heading, IconButton, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ColumnType } from "../utils/enums";
import { AddIcon } from "@chakra-ui/icons";


const ColumnColorSchema: Record<ColumnType, string> = {
    Todo: 'gray',
    "In Progress": 'blue',
    Blocked: 'red',
    Completed: 'green'
}
function Column({column}: {column: ColumnType}){
    return(
        <Box>
            <Heading fontSize={"md"} mb={4} letterSpacing={"wide"} >
                <Badge px={12} py={1} rounded={"lg"} colorScheme={ColumnColorSchema[column]}>
                    {column}
                </Badge>
            </Heading>
            <IconButton size={"xs"} w={"full"} color={useColorModeValue('gray.500', 'gray.400')} bgColor={useColorModeValue('gray.100', 'gray.700')} _hover={{bgColor: useColorModeValue('gray.200', 'gray.600')}} py={2} variant={"solid"} colorScheme="black" aria-label="add-task" icon={<AddIcon />}/>
            <Stack 
                direction={{ base: 'row', md: 'column' }}
                h={{ base: 300, md: 600 }}
                p={4}
                mt={2}
                spacing={4}
                bgColor={useColorModeValue('gray.50', 'gray.900')}
                rounded="lg"
                boxShadow="md"
                overflow="auto"
                // opacity={isOver ? 0.85 : 1}
                >
                
            </Stack>
        </Box>
    )
}
export default Column