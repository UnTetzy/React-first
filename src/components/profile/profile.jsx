import './profile.css';
import MainUser from './mainUser/mainUser';
import MyPosts from './myPosts/myPosts';

const Profile = (props) => {

  return (
    <section className="profile">
      <div className="profile__wrapper">
        <MainUser />
        <MyPosts posts={props.posts} />
      </div>
  </section>
  );
}

export default Profile;