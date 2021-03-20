import './post.css';

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__inner">
        <div className="post__user">
          <a className="avatar" href="#">
            <img className="post__avatar avatar__img" src="https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg" alt="Avatar"/>
          </a>
          <div className="post__info">
            <h5 className="post__name">
              <a className="post__name-link" href="#">
                {props.name}
              </a>
            </h5>
            <div className="post__info-date">
              <div className="post__info-day">
                {props.day}
              </div>
              <div className="post__info-time">
                {props.time}
              </div>
            </div>
          </div>
        </div>
        <div className="post__content">
          <div className="post__content-text">
            {props.message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;