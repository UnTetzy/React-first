import './dialogsMessage.css';

const Message = (props) => {
  return (
    <div className="dialogs__message-text_user">
      {props.message}
    </div>
  );
}

const DialogsMessage = () => {

  let messagesData = [
    {message: 'Привет как дела'},
    {message: 'Хахахахаха'},
    {message: 'Логотип андерграунда на баранке'}
  ]

  return (
    <div className="dialogs__message">
      <div className="dialogs__message-header">
        Поиск и тд
      </div>
      <div className="dialogs__message-text">
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
      <textarea className="dialogs__message-textarea" placeholder="Напишите сообщение..."></textarea>
    </div>
  );
}

export default DialogsMessage;