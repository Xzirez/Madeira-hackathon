import React, { useMemo } from 'react';
import { Stack } from '@chakra-ui/react';
import CategoryCard from './CategoryCard';
import { topics } from '../model/topics';
export const AnswerBox = ({ queryData }) => {
  const result = useMemo(
    () =>
      queryData.trim() !== ''
        ? topics.filter(({ header }) => {
            return header.toLowerCase().includes(queryData.toLowerCase());
          })
        : topics,
    [queryData]
  );

  return (
    <Stack
      direction={{ lg: 'row', md: 'row', sm: 'column' }}
      w="100%"
      justifyContent="center"
      p="3"
      gap={{ lg: '10', md: '5', sm: '1' }}
    >
      {result.map((topic, index) => {
        return <CategoryCard key={'Key: ' + index} {...topic} />;
      })}
    </Stack>
  );
};
