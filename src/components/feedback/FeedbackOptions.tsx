import type { State } from '../app/App';

const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}: {
  options: State;
  onLeaveFeedback: (name: keyof State) => void;
}) => {
  return (
    <>
      <div className='flex gap-4'>
        {Object.keys(options).map((name) => (
          <button
            className='bg-[#696969] px-1 text-white hover:bg-black'
            key={name}
            onClick={() => onLeaveFeedback(name as keyof State)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default FeedbackOptions;
