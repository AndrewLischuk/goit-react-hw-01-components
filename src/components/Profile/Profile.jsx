import { Container } from 'components/Container/Container';
import { ProfileStats } from './ProfileStats/ProfileStats';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const entries = Object.entries(stats);
  return (
    <Container>
      <div className={styles.container}>
        <img src={avatar} alt="User avatar" className={styles.img} />
        <p className={styles.userName}>{username}</p>
        <p className={styles.description}>@{tag}</p>
        <p className={styles.description}>{location}</p>
      </div>
      <ul>
        {entries.map(entry => {
          return (
            <ProfileStats
              key={entry[0]}
              label={entry[0]}
              value={entry[1]}
            ></ProfileStats>
          );
        })}
      </ul>
    </Container>
  );
};

Profile.prototypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
