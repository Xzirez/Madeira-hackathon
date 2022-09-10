import React from 'react';
import './index.css';
import { Box } from '@chakra-ui/react';
export default function Video() {
  return (
    <Box
      autoPlay
      preLoad="autop"
      loop
      muted
      id="background-video"
      as="video"
      src="../../video/Madeira.mp4"
      alt=""
      objectFit="contain"
      sx={{
        aspectRatio: '16/9',
      }}
    />
  );
}
