import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div className={styles.friends__item}>
      <span
        className={styles.friend__status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={styles.friend__avatar} src={avatar} alt="" width="48" />
      <p className={styles.friend__name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
