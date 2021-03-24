import './dialogs.css';
import DialogsMessage from './dialogsMessages/dialogsMessage';
import DialogsUser from './dialogsUser/dialogsUser';

const Dialogs = (props) => {

  let dialogsEl = props.dialogs
    .map( dialog => <DialogsUser id={dialog.id} name={dialog.name} /> ); 

  return (
    <section className="dialogs">
      <div className="dialogs__inner">
        <div className="dialogs__users">
          {dialogsEl}
        </div>
        <div className="dialogs__messages">
          <DialogsMessage messages={props.messages} />
        </div>
      </div>
    </section>
  );
}

export default Dialogs;