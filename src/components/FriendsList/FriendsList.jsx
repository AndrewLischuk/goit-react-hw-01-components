import Proptypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import styles from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.frindsList}>
      {friends.map(({ id, name, avatar, isOnline = false }) => (
        <FriendListItem
          key={id}
          id={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.prototypes = {
  friends: Proptypes.object.isRequired,
};
