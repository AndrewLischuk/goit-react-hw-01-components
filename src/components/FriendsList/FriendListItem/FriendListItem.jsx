import styles from './FriendListItem.module.css';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id} className={styles.item}>
      <span
        className={isOnline ? styles.statusTrue : styles.statusFalse}
      ></span>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
