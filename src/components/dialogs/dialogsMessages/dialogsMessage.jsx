import './dialogsMessage.css';
import Message from './message/message';

const DialogsMessage = (props) => {

  let messagesEl = props.messages
    .map(message => <Message message={message.message} />); 

  return (
    <div className="dialogs__message">
      <div className="dialogs__message-header">
        Поиск и тд
      </div>
      <div className="dialogs__message-text">
        {messagesEl}
      </div>
      <textarea className="dialogs__message-textarea" placeholder="Напишите сообщение..."></textarea>
    </div>
  );
}

export default DialogsMessage;