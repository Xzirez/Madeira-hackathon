import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

export const SubjectCard = props => {
  return (
    <Box
      width="25%"
      paddingTop="10px"
      display="flex"
      gap="15px"
      flexDirection="column"
    >
      <Heading borderBottom="1px" paddingBottom="10px" size="md">
        {props.heading}
      </Heading>
      <p>{props.subtitle}</p>
      <List padding="20px" gap="5px">
        {props.listItems.map((item, index) => {
          return (
            <ListItem key={'Key: ' + index}>
              <CheckItem {...item}></CheckItem>
            </ListItem>
          );
        })}
      </List>
      <Button>Start</Button>
    </Box>
  );
};

const CheckItem = ({ info, status }) => {
  return (
    <div style={{ display: 'flex', cursor: 'pointer' }}>
      <ListIcon
        as={status ? CheckIcon : CloseIcon}
        color={status ? 'green.500' : 'red'}
      />
      <Text fontSize="sm">{info}</Text>
    </div>
  );
};
