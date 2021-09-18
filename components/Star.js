import * as React from 'react';
import { IconButton } from 'react-native-paper';

const Star = (props) => (
  <IconButton
    icon='star'
    color='#ec2059'
    size={props.size}
  />
);

export default Star;