import { useReducer } from 'react';
import Statistics from '../statistics/Statistics';
import FeedbackOptions from '../feedback/FeedbackOptions';
import Notification from '../notification/Notification';
import Section from '../section/Section';

export enum LeaveFeedback {
  GOOD = 'good',
  NEUTRAL = 'neutral',
  BAD = 'bad',
}

export type State = {
  good: number;
  neutral: number;
  bad: number;
};

function updateState(state: State, name: LeaveFeedback) {
  return {
    ...state,
    [name]: state[name] + 1,
  };
}

function reducer(state: State, name: LeaveFeedback) {
  return updateState(state, name);
}

const App = () => {
  const [stats, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (name: LeaveFeedback) => {
    dispatch(name);
  };

  const totalCountFeedback = (): number => {
    return Object.values(stats).reduce((total, value) => (total += value), 0);
  };

  const countPositiveFeedbackPercentage = (): string => {
    return `${Math.floor((stats.good / totalCountFeedback()) * 100) || 0}%`;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={stats} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {totalCountFeedback() ? (
          <Statistics
            {...stats}
            total={totalCountFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message='There is no feedback' />
        )}
      </Section>
    </>
  );
};

export default App;
