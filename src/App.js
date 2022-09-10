import React from 'react';
import { ChakraProvider, Box, Grid, theme, Stack } from '@chakra-ui/react';

import CategoryCard from './components/CategoryCard';
import { topics } from './model/topics';
import Video from './components/Video';
import Overlay from './components/Overlay';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Video />
      <Overlay />
      <Box textAlign="center" fontSize="xl">
        <Stack
          direction="row"
          w="100%"
          justifyContent="center"
          minH="100vh"
          p={3}
        >
          {topics.map(topic => {
            return (
              <CategoryCard
                subtitles={topic.subtitles}
                description={topic.description}
                topic={topic.header}
              />
            );
          })}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
