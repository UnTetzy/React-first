import './message.css';

const Message = (props) => {
  return (
    <div className="dialogs__message-text_user">
      {props.message}
    </div>
  );
}

export default Message;