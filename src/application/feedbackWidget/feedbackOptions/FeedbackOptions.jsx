import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Wrapper,
  ButtonsContainer,
} from './StyledComponents';

const FeedbackOptions = props => {
  const {
    options,
    onLeaveFeedback,
  } = props;

  return (
    <Wrapper>
      <ButtonsContainer>
        {options.map(item => (
          <Button
            key={item?.id}
            onClick={event => onLeaveFeedback(event.currentTarget.accessKey)}
            accessKey={item?.label}
          >
            {item?.title ?? ''}
          </Button>
        ))}
      </ButtonsContainer>
    </Wrapper>
  )
}

FeedbackOptions.propTypes = {
  id: PropTypes.number,
  item: PropTypes.object,
  label: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;