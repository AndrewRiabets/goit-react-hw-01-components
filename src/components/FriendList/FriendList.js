import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendsList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friends}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.friends__card}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
