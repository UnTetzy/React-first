import './profile.css';
import MainUser from './mainUser/mainUser';
import MyPosts from './myPosts/myPosts';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__wrapper">
        <MainUser />
        <MyPosts />
      </div>
  </section>
  );
}

export default Profile;