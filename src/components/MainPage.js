import React, { useState } from 'react';

import { Flex, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { AnswerBox } from './AnswerBox';
import { SearchBar } from './SearchBar';

export const MainPage = () => {
  const [queryData, setQuetyData] = useState('');
  console.log('*** queryData', queryData);
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Meeting scheduling{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <SearchBar queryData={queryData} setQuetyData={setQuetyData} />
        <AnswerBox queryData={queryData} />
        <Flex w={'full'}></Flex>
      </Stack>
    </Container>
  );
};
