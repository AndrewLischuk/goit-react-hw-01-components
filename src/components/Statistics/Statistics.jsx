import PropTypes from 'prop-types';
import { StatList } from './StatList/StatList';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => {
          return (
            <StatList
              key={stat.id}
              id={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

Statistics.prototypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array,
};
