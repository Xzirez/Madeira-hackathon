import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import {} from '@chakra-ui/react';

const Feature = ({ person, heading, text }) => {
  return (
    <GridItem>
      <Flex
        flex={{ base: 1 }}
        align="center"
        justify={{ base: 'center', md: 'start' }}
      >
        <div>
          <chakra.h3 fontSize="xl" fontWeight="600">
            {person}
          </chakra.h3>
          <chakra.h3 fontSize="xl" fontWeight="600">
            {heading}
          </chakra.h3>
          <chakra.p>{text}</chakra.p>
        </div>
        <Button colorScheme="teal" size="xs">
          Give access
        </Button>
      </Flex>
    </GridItem>
  );
};

export const InstitutionAccount = ({ askedDocuments, documentsList = [] }) => {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Accept Documents
            </chakra.h2>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>Some text hear</chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      {documentsList.map(document => {
        return <Feature heading={document.title} text={document.description} />;
      })}

      <chakra.h2 fontSize="3xl" fontWeight="700">
        Share Documents
      </chakra.h2>
      <Divider mt={12} mb={12} />
      {askedDocuments.map(document => {
        return <Feature heading={document.info} text={document.info} />;
      })}
    </Box>
  );
};
