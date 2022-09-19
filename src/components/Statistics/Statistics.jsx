import styles from '../shared/shared.module.css';
const Statistics = ({ state }) => {
  const { good, neutral, bad } = state;
  const totalCount = good + neutral + bad;
  // console.log(good);
  // console.log(totalCount);
  const positivePercentage = (good / totalCount) * 100;
  // console.log(positivePercentage);
  return (
    <>
      <h2 className={styles.sectionHeader}>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <div>
        <p>Total: {totalCount}</p>
        <p>
          Positive feedback percentage:{' '}
          {positivePercentage % 2 === 0
            ? positivePercentage
            : positivePercentage.toFixed(2)}
          %
        </p>
      </div>
    </>
  );
};

export default Statistics;
