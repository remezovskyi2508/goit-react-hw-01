import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
          <li className={styles.item} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        )
      )}
    </ul>
  );
}
