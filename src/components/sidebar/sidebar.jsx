import './sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            Profile
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            News
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link active" href="#">
            Messages
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            Friends
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            Music
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            Сommunity
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            Photos
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            Videos
          </a>
        </li>
        <li className="sidebar-nav__item">
          <a className="sidebar-nav__link" href="#">
            Settings
          </a>
        </li>
      </ul>
    </aside> 
  );
}

export default Sidebar;