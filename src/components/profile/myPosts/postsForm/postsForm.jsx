import './postsForm.css';

const PostsForm = () => {
  return (
    <form className="postst__form" action="#">
      <textarea className="postst__form-textarea" placeholder="..."></textarea>
      <button className="postst__form-btn" type="submit">Send</button>
    </form>
  );
}

export default PostsForm;