import './body.css';
import Sidebar from "../sidebar/sidebar";
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "../profile/profile";
import News from '../news/news';
import Dialogs from '../dialogs/dialogs';
import Friends from '../friends/friends';

const Body = () => {
  return (
    <BrowserRouter>
      <body>
        <main className="page">
          <div className="container">
            <div className="page__inner">
              <Sidebar /> 
              <Route component={Profile} path="/profile" />
              <Route component={News} path="/news" />
              <Route component={Dialogs} path="/dialogs" />
              <Route component={Friends} path="/friends" />
            </div>
          </div>
        </main>   
      </body>
    </BrowserRouter>
  );
}

export default Body;