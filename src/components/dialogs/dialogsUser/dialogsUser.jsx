import './dialogsUser.css';
import { NavLink } from 'react-router-dom';

const DialogsUser = (props) => {

  let path = "/dialogs/" + props.id;
  
  return (
    <NavLink className="dialogs__user" to={path}>
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
    </NavLink>
  );
}

export default DialogsUser;