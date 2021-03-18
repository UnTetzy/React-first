import Sidebar from "./sidebar";
import Profile from "./profile";

const Body = () => {
  return (
    <body>
      <main className="page">
        <div className="container">
          <div className="page-inner">
            <Sidebar /> 
            <Profile />
          </div>
        </div>
      </main>   
    </body>
  );
}

export default Body;