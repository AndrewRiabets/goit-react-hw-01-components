import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__description}>
        <img
          src="https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-37.jpg"
          alt="Аватар пользователя"
          className={styles.profile__avatar}
        />
        <p className={styles.profile__name}>{name}</p>
        <p className={styles.profile__tag}>{tag}</p>
        <p className={styles.profile__location}>{location}</p>
      </div>

      <ul className={styles.profile__stats}>
        <li className={styles.profile__statsItem}>
          <span className={styles.profile__label}>Followers</span>
          <span className={styles.profile__followers}>{followers}</span>
        </li>
        <li className={styles.profile__statsItem}>
          <span className={styles.profile__label}>Views</span>
          <span className={styles.profile__views}>{views}</span>
        </li>
        <li className={styles.profile__statsItem}>
          <span className={styles.profile__label}>Likes</span>
          <span className={styles.profile__likes}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
