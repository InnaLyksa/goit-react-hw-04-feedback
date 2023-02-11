import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, feedbackHandler, type }) =>
  options.map(keyState => {
    // console.log(keyState);

    return (
      <Button type={type} key={keyState} onClick={feedbackHandler}>
        {keyState}
      </Button>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  feedbackHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
