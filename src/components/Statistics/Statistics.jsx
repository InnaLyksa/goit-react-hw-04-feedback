import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsResult,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem item="good">Good: {good}</StatisticsItem>
        <StatisticsItem item="neutral">Neutral: {neutral} </StatisticsItem>
        <StatisticsItem item="bad">Bad: {bad}</StatisticsItem>
      </StatisticsList>
      <StatisticsResult>Total: {countTotalFeedback}</StatisticsResult>
      <StatisticsResult>
        Positive feedback: {positivePercentage}%
      </StatisticsResult>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
