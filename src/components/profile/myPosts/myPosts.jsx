import './myPosts.css';
import Post from './post/post';
import PostsForm from './postsForm/postsForm';


const MyPosts = () => {

  let postData = [
    {id: 1, name: 'Alexander Vetrov', day: '3 марта', time: '19:04', message: 'Сегодня я сходил погулять'},
    {id: 2, name: 'Alexander Vetrov', day: '1 марта', time: '18:04', message: 'АЛАЛАЛААЛАЛАааааааааааааааааааааааааааааааааааааааааааааffffffffffffffffffffff'},
    {id: 3, name: 'Alexander Vetrov', day: '12 февраля', time: '17:04', message: 'Сегодня я не сходил погулять'}
  ]

  let postsEl = postData.map(post => 
    <Post id={post.id} name={post.name} day={post.day} time={post.time} message={post.message} />)

  return (
    <div className="posts">
      <h4 className="posts__title">
        My posts
      </h4>
      <div className="posts__inner">
        <PostsForm />
        {postsEl}
      </div>
    </div>
  );
}

export default MyPosts;