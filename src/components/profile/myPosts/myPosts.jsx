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
        <Post message="Post 1" />
        <Post message="Post 2" />
      </div>
    </div>
  );
}

export default MyPosts;