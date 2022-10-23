import PropTypes from 'prop-types';
import styles from './ProfileStats.module.css';

export const ProfileStats = ({ label, value = 0 }) => {
  return (
    <li className={styles.container}>
      <span className={styles.label}>
        {label[0].toUpperCase() + label.slice(1)}
      </span>
      <span className={styles.quantity}>{value}</span>
    </li>
  );
};

ProfileStats.prototypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
};
