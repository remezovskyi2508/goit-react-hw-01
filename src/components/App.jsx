import './App.css';
// src/components/App.jsx

import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';

import userData from '../data/userData';
import friends from '../data/friendData';


export default function App() {
  const { followers, views, likes } = userData.stats;
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <FriendList friends={friends} />
    </>
  );
}
