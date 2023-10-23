export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good: <span>{good}</span></p>
        </li>
        <li>
          <p>Neutral: <span>{neutral}</span></p>
        </li>
        <li>
          <p>Bad: <span>{bad}</span></p>
        </li>
        <li>
          <p>Total: <span>{total}</span></p>
        </li>
        <li>
          <p>Positive feedback: <span>{percent} %</span></p>
        </li>
      </ul>
    </div>
  );
};