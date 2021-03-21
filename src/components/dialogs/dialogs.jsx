import './dialogs.css';
import DialogsMessage from './dialogsMessages/dialogsMessage';
import DialogsUser from './dialogsUser/dialogsUser';

const Dialogs = (props) => {
  return (
    <section className="dialogs">
      <div className="dialogs__inner">
        <div className="dialogs__users">
          <DialogsUser name="Alexander Vetrov" message="Привет как дела" />
          <DialogsUser name="Alexander Vetrov" message="Привет как дела" />
          <DialogsUser name="Alexander Vetrov" message="Привет как дела" />
          <DialogsUser name="Alexander Vetrov" message="Привет как дела" />
          <DialogsUser name="Alexander Vetrov" message="Привет как дела" />
          <DialogsUser name="Alexander Vetrov" message="Привет как дела" />
        </div>
        <div className="dialogs__messages">
          <DialogsMessage />
        </div>
      </div>
    </section>
  );
}

export default Dialogs;