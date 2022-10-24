import Proptypes from 'prop-types';
import styles from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.frindsList}>
      {friends.map(({ id, name, avatar, isOnline = false }) => (
        <li key={id} className={styles.item}>
          <span
            className={isOnline ? styles.statusTrue : styles.statusFalse}
          ></span>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.prototypes = {
  friends: Proptypes.object.isRequired,
};
