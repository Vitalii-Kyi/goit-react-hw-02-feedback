export const FeedbackButtons = ({ onChangeStats, onClear, options }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onChangeStats(option)}
        >
          {option}
        </button>
      ))}
      <button type="button" onClick={onClear}>
        clear
      </button>
    </div>
  );
};