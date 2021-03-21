import './profile.css';
import MainUser from './mainUser/mainUser';
import MyPosts from './myPosts/myPosts';

const Profile = () => {
  return (
    <section className="profile">
      <img className="profile__headimage" src="https://www.architime.ru/specarch/henning_larsen_architects_/2.jpg"></img>
      <div className="profile__wrapper">
        <MainUser />
        <MyPosts />
      </div>
  </section>
  );
}

export default Profile;