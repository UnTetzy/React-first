import './dialogs.css';
import DialogsMessage from './dialogsMessages/dialogsMessage';
import DialogsUser from './dialogsUser/dialogsUser';

const Dialogs = (props) => {

  const dialogsData = [
    {id: 1, name: 'Alexander Vetrov'},
    {id: 2, name: 'Evgeniy Vetrov'},
    {id: 3, name: 'Sasha Vetrov'},
    {id: 4, name: 'Oleg Vetrov'},
    {id: 5, name: 'Grisha Vetrov'},
    {id: 6, name: 'Dima Vetrov'}
  ]

  let dialogsEl = dialogsData
    .map( dialog => <DialogsUser id={dialog.id} name={dialog.name} /> ); 
  
  

  return (
    <section className="dialogs">
      <div className="dialogs__inner">
        <div className="dialogs__users">
          {dialogsEl}
        </div>
        <div className="dialogs__messages">
          <DialogsMessage />
        </div>
      </div>
    </section>
  );
}

export default Dialogs;