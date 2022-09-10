import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CategoryCard = props => {
  return (
    <Center py={5}>
      <Box
        maxW={'425px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        ></Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {props.header}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {props.subtitle}
          </Heading>
          <Text color={'gray.500'}>{props.description}</Text>
        </Stack>
        <Link to={props.link}>
          <Button
            marginTop={'4'}
            marginBottom={'3'}
            colorScheme="blue"
            variant="solid"
            size={'lg'}
          >
            Start
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default CategoryCard;
