const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: string;
}) => {
  return (
    <div className='flex flex-col'>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}</span>{' '}
    </div>
  );
};

export default Statistics;
