import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { ModalProp } from '../../Types/Modal.types';
import './Modal.css';

function Modal({ setShow, show }: ModalProp) {
  const [usersFeedback, setUsersFeedback] = useState('');

  function handleOnChangeText(e: React.ChangeEvent<HTMLTextAreaElement>):void {
    setUsersFeedback(e.target.value)
  }

  return (
    show ?
      <div className='feedbacky-modal'>
        {/* <div className='feedbacky-modal-wrapper'> */}
        <div className="feedbacky-modal-container">
          <div className="feedbacky-modal-header feedbacky-flexEnd">
            <span onClick={() => { setShow(false) }} className="feedbacky-modal-cancelButton" role={'button'} data-testid="cancel" >
              <MdClose />
            </span>
          </div>
          <div className="feedbacky-modal-header feedbacky-flex">
            <h1>
            SEND YOUR FEEDBACK
            </h1>
          </div>
          <div className="feedbacky-modal-textbox feedbacky-flex">
            <textarea className='feedbacky-fullWidth' onChange={(e) => handleOnChangeText(e)} placeholder="Please write your comments..."/>
          </div>
          <div className="feedbacky-modal-sendButton feedbacky-flex">
            <button className='feedbacky-fullWidth' onClick={() => {console.log(usersFeedback)}}>
              Send
            </button>
          </div>
        </div>
        {/* </div> */}

      </div> : null
  );
}

export default Modal;
