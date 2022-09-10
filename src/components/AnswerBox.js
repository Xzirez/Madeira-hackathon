import React from 'react';

import { CheckIcon } from '@chakra-ui/icons';
import { List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { answersData } from '../data/answers';

export const AnswerBox = ({ queryData }) => {
  const result =
    queryData.trim() !== ''
      ? answersData.filter(({ answer }) => {
          return answer.toLowerCase().includes(queryData.toLowerCase());
        })
      : [];
  return (
    <List>
      {result.map(({ answer, link }) => {
        return (
          <ListItem>
            <div style={{ display: 'flex', cursor: 'pointer' }}>
              <ListIcon as={CheckIcon} color="green.500" />
              <Text fontSize="lg">{answer}</Text>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
};
