import './body.css';
import Sidebar from "../sidebar/sidebar";
import Profile from "../profile/profile";

const Body = () => {
  return (
    <body>
      <main className="page">
        <div className="container">
          <div className="page__inner">
            <Sidebar /> 
            <Profile />
          </div>
        </div>
      </main>   
    </body>
  );
}

export default Body;