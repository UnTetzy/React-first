import './dialogs.css';
import DialogsMessage from './dialogsMessages/dialogsMessage';
import DialogsUser from './dialogsUser/dialogsUser';

const Dialogs = (props) => {
  return (
    <section className="dialogs">
      <div className="dialogs__inner">
        <div className="dialogs__users">
          <DialogsUser id="/1" name="Alexander Vetrov" message="Привет как дела" />
          <DialogsUser id="/2" name="Evgeniy Vetrov" message="Привет как дела" />
          <DialogsUser id="/3" name="Sasha Vetrov" message="Привет как дела" />
          <DialogsUser id="/4" name="Oleg Vetrov" message="Привет как дела" />
          <DialogsUser id="/5" name="Grisha Vetrov" message="Привет как дела" />
          <DialogsUser id="/6" name="Dima Vetrov" message="Привет как дела" />
        </div>
        <div className="dialogs__messages">
          <DialogsMessage />
        </div>
      </div>
    </section>
  );
}

export default Dialogs;