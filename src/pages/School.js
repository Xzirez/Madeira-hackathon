import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

export const School = () => {
  return (
    <Center py={3}>
      <Flex
        // h="100vh"
        width={'100%'}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        // bgColor={`green`}
      >
        <Box
          maxW={'730px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
          >
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}
            >
              School
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>$</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                79
              </Text>
              <Text color={'gray.500'}>/month</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={30} py={10}>
            <List spacing={3}>
              <ListItem>
                <Flex
                  // h="100vh"
                  justifyContent="space-between"
                  alignItems="center"
                  // bgColor={`green`}
                >
                  <div>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Doc 1
                  </div>
                  <Button colorScheme="teal" size="xs">
                    Button
                  </Button>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  // h="100vh"
                  justifyContent="space-between"
                  alignItems="center"
                  // bgColor={`green`}
                >
                  <div>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Doc 1
                  </div>
                  <Button colorScheme="teal" size="xs">
                    Button
                  </Button>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  // h="100vh"
                  justifyContent="space-between"
                  alignItems="center"
                  // bgColor={`green`}
                >
                  <div>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Doc 1
                  </div>
                  <Button colorScheme="teal" size="xs">
                    Button
                  </Button>
                </Flex>
              </ListItem>
            </List>

            <Button
              mt={10}
              w={'full'}
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
            >
              Apply
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'730px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
          >
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}
            >
              School
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>$</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                79
              </Text>
              <Text color={'gray.500'}>/month</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={30} py={10}>
            <List spacing={3}>
              <ListItem>
                <Flex
                  // h="100vh"
                  justifyContent="space-between"
                  alignItems="center"
                  // bgColor={`green`}
                >
                  <div>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Doc 1
                  </div>
                  <Button colorScheme="teal" size="xs">
                    Button
                  </Button>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  // h="100vh"
                  justifyContent="space-between"
                  alignItems="center"
                  // bgColor={`green`}
                >
                  <div>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Doc 1
                  </div>
                  <Button colorScheme="teal" size="xs">
                    Button
                  </Button>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  // h="100vh"
                  justifyContent="space-between"
                  alignItems="center"
                  // bgColor={`green`}
                >
                  <div>
                    <ListIcon as={CheckIcon} color="green.400" />
                    Doc 1
                  </div>
                  <Button colorScheme="teal" size="xs">
                    Button
                  </Button>
                </Flex>
              </ListItem>
            </List>

            <Button
              mt={10}
              w={'full'}
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
};
