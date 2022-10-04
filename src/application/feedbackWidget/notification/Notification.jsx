import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Wrapper,
} from './StyledComponents';

const Notification = props => {
  const { message } = props;

  return (
    <Wrapper>
      <Text>
        {message}
      </Text>
    </Wrapper>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;