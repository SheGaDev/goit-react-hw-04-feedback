import { Component } from 'react';
import Statistics from '../statistics/Statistics';
import FeedbackOptions from '../feedback/FeedbackOptions';
import Notification from '../notification/Notification';
import Section from '../section/Section';

export type State = {
  good: number;
  neutral: number;
  bad: number;
};

export default class App extends Component<object, State> {
  state: State = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalCountFeedback = (): number => {
    return Object.values(this.state).reduce((total, value) => (total += value), 0);
  };

  countPositiveFeedbackPercentage = (): string => {
    return `${Math.floor((this.state.good / this.totalCountFeedback()) * 100) || 0}%`;
  };

  onLeaveFeedback = (name: string) => {
    this.setState((prev: Pick<State, keyof State>): Pick<State, keyof State> | null => {
      return { [name]: prev[name as keyof State] + 1 } as State;
    });
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={'Statistics'}>
          {this.totalCountFeedback() ? (
            <Statistics
              {...this.state}
              total={this.totalCountFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message='There is no feedback' />
          )}
        </Section>
      </>
    );
  }
}
