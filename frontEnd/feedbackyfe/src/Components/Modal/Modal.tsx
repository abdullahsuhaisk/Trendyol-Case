import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { ModalProp } from '../../Types/Modal.types';
import './Modal.css';

function Modal({ setShow, show }: ModalProp) {
  const [usersFeedback, setUsersFeedback] = useState('');
  const [feedBackSended, setFeedBackSended] = useState(false);
  const [loading, setLoading] = useState(false);

  function resetAllState() {
    setLoading(false);
    setShow(false);
    setFeedBackSended(false)
  }

  function textAreaValidation(): boolean {
    if (!usersFeedback) {
      return false;
    } else {
      return true;
    }
  }

  function handleOnChangeText(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setUsersFeedback(e.target.value)
  }

  function mockSendFeedBack() {
    setLoading(true)
    setTimeout(() => {
      setFeedBackSended(true);
      setLoading(false);
    }, 1000);
  }

  function sendUserFeedBack() {
    if (textAreaValidation()) {
      mockSendFeedBack();
    } else {
      alert('Error');
    }
  }
  return (
    show ?
      <div className='feedbacky-modal'>
        <div className="feedbacky-modal-container">
          <div className="feedbacky-modal-header feedbacky-flexEnd">
            <span onClick={() => { resetAllState() }} className="feedbacky-modal-cancelButton" role={'button'} data-testid="cancel" >
              <MdClose />
            </span>
          </div>
          {feedBackSended ?
            <div className='feedbacky-flex feedbacky-feedback-recieved'>
              <h1>
                WE HAVE GOT <br /> YOUR FEEDBACK
              </h1>
            </div> :
            <>
              <div className="feedbacky-modal-header feedbacky-flex">
                <h1>
                  SEND YOUR FEEDBACK
                </h1>
              </div>
              <div className="feedbacky-modal-textbox feedbacky-flex">
                <textarea className='feedbacky-fullWidth' onChange={(e) => handleOnChangeText(e)} placeholder="Please write your comments..." />
              </div>
              <div className="feedbacky-modal-sendButton feedbacky-flex">
                <button className='feedbacky-fullWidth' onClick={() => { sendUserFeedBack() }}>
                  Send
                </button>
              </div>
            </>
          }
        </div>


      </div> : null
  );
}

export default Modal;
