import React from 'react';
import './index.css';
import { AspectRatio, Box } from '@chakra-ui/react';
export default function Video() {
  return (
    <AspectRatio ratio="1">
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
      />
    </AspectRatio>
  );
}
