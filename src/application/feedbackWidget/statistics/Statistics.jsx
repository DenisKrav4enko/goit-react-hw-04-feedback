import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  NameOfStat,
  CountOfStat,
  ItemContainer,
  StatsContainer,
} from './StyledComponents';

const Statistics = props => {
  const {
    bad,
    good,
    total,
    neutral,
    options,
    countPositiveFeedbackPercentage,
  } = props;

  return (
    <Wrapper>
      <StatsContainer>
        {options.map(item => (
          <ItemContainer key={item.id}>
            <NameOfStat>
              {item?.title ?? ''}:&nbsp;
            </NameOfStat>
            <CountOfStat>
              {props[item.label]}
            </CountOfStat>
          </ItemContainer>))
        }
        <ItemContainer>
          <NameOfStat>
            Total:&nbsp;
          </NameOfStat>
          <CountOfStat>
            {total}
          </CountOfStat>
        </ItemContainer>
        <ItemContainer>
          <NameOfStat>
            Positive feedback:&nbsp;
          </NameOfStat>
          <CountOfStat>
            {total !== 0
              ? countPositiveFeedbackPercentage
              : 0
            }%
          </CountOfStat>
        </ItemContainer>
      </StatsContainer>
    </Wrapper>
  )
}

Statistics.propTypes = {
  id: PropTypes.number,
  bad: PropTypes.number,
  item: PropTypes.object,
  good: PropTypes.number,
  title: PropTypes.string,
  label: PropTypes.string,
  total: PropTypes.number,
  neutral: PropTypes.number,
  options: PropTypes.array.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func,
};

export default Statistics;