import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';
import { Container } from './Container/Container';
import './App.css';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
