import './myPosts.css';
import Post from './post/post';
import PostsForm from './postsForm/postsForm';


const MyPosts = (props) => {

  let postsEl = props.posts.map(post => 
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