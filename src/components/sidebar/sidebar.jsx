import './sidebar.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/news" activeClassName="active">
            News
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/dialogs" activeClassName="active">
            Messages
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/friends" activeClassName="active">
            Friends
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/music" activeClassName="active">
            Music
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/community" activeClassName="active">
            Сommunity
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/photos" activeClassName="active">
            Photos
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/videos" activeClassName="active">
            Videos
          </NavLink>
        </li>
        <li className="sidebar-nav__item">
          <NavLink className="sidebar-nav__link" to="/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </aside> 
  );
}

export default Sidebar;