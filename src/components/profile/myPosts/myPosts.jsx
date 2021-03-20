import './myPosts.css';
import Post from './post/post';
import PostsForm from './postsForm/postsForm';


const MyPosts = () => {
  return (
    <div className="posts">
      <h4 className="posts__title">
        My posts
      </h4>
      <div className="posts__inner">
        <PostsForm />
        <Post name="Alexander Vetrov" day="3 марта" time="19:04" message="Сегодня я сходил погулять" />
        <Post name="Alexander Vetrov" day="1 марта" time="19:04" message="АЛАЛАЛААЛАЛАааааааааааааааааааааааааааааааааааааааааааааffffffffffffffffffffff" />
        <Post name="Alexander Vetrov" day="12 февраля" time="19:04" message="Сегодня я не сходил погулять" />
      </div>
    </div>
  );
}

export default MyPosts;