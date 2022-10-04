import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Wrapper,
} from './StyledComponents';

const Section = props => {
  const {
    title,
    component,
  } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
      {component}
    </Wrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  component: PropTypes.element,
};

export default Section;