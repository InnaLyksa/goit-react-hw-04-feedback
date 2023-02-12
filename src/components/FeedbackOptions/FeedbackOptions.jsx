import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, feedbackHandler, type }) =>
  options.map(option => {
    return (
      <Button type={type} key={option} onClick={() => feedbackHandler(option)}>
        {option}
      </Button>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  feedbackHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
