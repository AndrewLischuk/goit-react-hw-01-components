import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';
import { Container } from './Container/Container';
import './App.css';
import { Statistics } from './Statistics/Statistics';
import data from '../components/Statistics/data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  const title = 'upload stats';
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={title} stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
