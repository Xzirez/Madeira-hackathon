import { Input, useColorModeValue } from '@chakra-ui/react';

export const SearchBar = () => {
  return (
    <Input
      type={'text'}
      placeholder={'Search'}
      color={useColorModeValue('gray.800', 'gray.200')}
      bg={useColorModeValue('gray.100', 'gray.600')}
      rounded={'full'}
      border={0}
      _focus={{
        bg: useColorModeValue('gray.200', 'gray.800'),
        outline: 'none',
      }}
    />
  );
};
