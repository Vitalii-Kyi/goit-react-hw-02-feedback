import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
import { GlobalStyle, Box } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStats = badge => {
    this.setState(prevState => {
      return {
        [badge]: prevState[badge] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  handleResetStats = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Box>
        <Section title="Please leave your feedback">
          <FeedbackButtons
            options={Object.keys(this.state)}
            onChangeStats={this.handleChangeStats}
            onClear={this.handleResetStats}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <NotificationMessage message="There is no feedback, sorry!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percent={this.countPositivePercentage()}
            />
          )}
        </Section>

        <GlobalStyle />
      </Box>
    );
  }
}