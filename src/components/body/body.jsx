import './body.css';
import Sidebar from "../sidebar/sidebar";
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "../profile/profile";
import News from '../news/news';
import Dialogs from '../dialogs/dialogs';
import Friends from '../friends/friends';

const Body = (props) => {

  return (
    <BrowserRouter>
      <body>
        <main className="page">
          <div className="container">
            <div className="page__inner">
              <Sidebar /> 
              <Route render={() => <Profile posts={props.posts} />} path="/profile" />
              <Route render={() => <News />} path="/news" />
              <Route render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} path="/dialogs" />
              <Route render={() => <Friends />} path="/friends" />
            </div>
          </div>
        </main>   
      </body>
    </BrowserRouter>
  );
}

export default Body;