import './global.css';
import Body from './components/body/body';
import Header from './components/header/header';


const App = (props) => {

  

  return (
    <div className="app-wrapper">

      <Header />
      <Body posts={props.posts} dialogs={props.dialogs} messages={props.messages} />

    </div>
  );
}





export default App;
