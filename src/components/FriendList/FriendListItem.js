import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <div>
      <span
        class="status"
        style={isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
      ></span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
