import './dialogsUser.css';

const DialogsUser = (props) => {
  return (
    <a className="dialogs__user" href="#">
      <a className="avatar" href="#">
        <img className="dialogs__avatar avatar__img" src="https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg" alt="Avatar"/>
      </a>
      <div className="dialogs__info">
        <h5 className="dialogs__info-name">
          {props.name}
        </h5>
        <div className="dialogs__info-message">
          {props.message}
        </div>
      </div>
    </a>
  );
}

export default DialogsUser;