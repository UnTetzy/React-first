import './myPosts.css';
import Post from './post/post';
import PostsForm from './postsForm/postsForm';


const MyPosts = () => {

  let postData = [
    {id: 1, name: 'Alexander Vetrov', day: '3 марта', time: '19:04', message: 'Сегодня я сходил погулять'},
    {id: 2, name: 'Alexander Vetrov', day: '1 марта', time: '18:04', message: 'АЛАЛАЛААЛАЛАааааааааааааааааааааааааааааааааааааааааааааffffffffffffffffffffff'},
    {id: 3, name: 'Alexander Vetrov', day: '12 февраля', time: '17:04', message: 'Сегодня я не сходил погулять'}
  ]

  return (
    <div className="posts">
      <h4 className="posts__title">
        My posts
      </h4>
      <div className="posts__inner">
        <PostsForm />
        <Post id={postData[0].id} name={postData[0].name} day={postData[0].day} time={postData[0].time} message={postData[0].message} />
        <Post id={postData[1].id} name={postData[1].name} day={postData[1].day} time={postData[1].time} message={postData[1].message} />
        <Post id={postData[2].id} name={postData[2].name} day={postData[2].day} time={postData[2].time} message={postData[2].message} />
      </div>
    </div>
  );
}

export default MyPosts;