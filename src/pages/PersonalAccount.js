import { Center, Box, Heading, Avatar } from '@chakra-ui/react';
const PersonalAccount = () => {
  return (
    <Center>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="80px"
        flexDirection="column"
        gap="35px"
      >
        <Heading size="2xl">John Johnson</Heading>
        <Avatar size="2xl"></Avatar>
        <Box
          gap="25px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            cursor="pointer"
            size="lg"
            width="290px"
            borderBottom="1px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingBottom="20px"
          >
            Passport
          </Heading>
          <Heading
            cursor="pointer"
            size="lg"
            width="290px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderBottom="1px"
            paddingBottom="10px"
          >
            Drivers License
          </Heading>
          <Heading
            cursor="pointer"
            size="lg"
            width="290px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderBottom="1px"
            paddingBottom="10px"
          >
            COVID-19
          </Heading>
          <Heading
            cursor="pointer"
            size="lg"
            width="290px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderBottom="1px"
            paddingBottom="10px"
          >
            Car Insurance
          </Heading>
        </Box>
      </Box>
    </Center>
  );
};

export default PersonalAccount;
