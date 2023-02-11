import { Component } from 'react';
import { Container } from './App.styled';

// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Section, Statistics, Notification, FeedbackOptions } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = e => {
    const targetButtonContent = e.target.textContent;

    // console.log(targetButtonContent);
    // console.log([this.state[targetButtonContent]]);

    this.setState(() => ({
      [targetButtonContent]: this.state[targetButtonContent] + 1,
    }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const {
      state,
      updateState,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            feedbackHandler={updateState}
            type={'button'}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              countTotalFeedback={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet!"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
