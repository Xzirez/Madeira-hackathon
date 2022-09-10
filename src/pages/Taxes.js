import { Box, Button, Heading, List } from '@chakra-ui/react';
import { SubjectCard } from '../components/SubjectCard';
import subjects from '../model/subjects';

const Taxes = () => {
  return (
    <Box
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      display="flex"
      padding="10px"
    >
      <Heading>Taxes</Heading>
      <Box
        flexDirection="row"
        display="flex"
        padding="10"
        width="100%"
        gap="100"
        justifyContent="space-between"
      >
        {subjects.map((subject, index) => (
          <SubjectCard key={'Key: ' + index} {...subject} />
        ))}
      </Box>
    </Box>
  );
};

export default Taxes;
