import React from 'react';
import ReactDOM from 'react-dom';


//props from parent
const Modal = props => {
  return ReactDOM.createPortal(

    // it was onCLick={()=> history.push('/')}
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
