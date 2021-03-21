import './dialogsMessage.css';

const DialogsMessage = () => {
  return (
    <div className="dialogs__message">
      <div className="dialogs__message-header">
        Тут поиск и тд
      </div>
      <div className="dialogs__message-text">
        <div className="dialogs__message-text_user">
          Привет как дела
        </div>
        <div className="dialogs__message-text_user">
          Хахахахаха
        </div>
        <div className="dialogs__message-text_user">
          Логотип андерграунда на парадке
        </div>
      </div>
      <textarea className="dialogs__message-textarea" placeholder="Напишите сообщение..."></textarea>
    </div>
  );
}

export default DialogsMessage;