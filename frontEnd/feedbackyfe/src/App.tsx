import { useState } from 'react';
import './App.css';
import FeedBackButton from './Components/FeedbackButton/FeedBackButton';
import Modal from './Components/Modal/Modal';

function App({ domElement }: any) {

  const companyName = domElement.getAttribute("data-subreddit")
  const [show, setShow] = useState(false);
  // console.log(companyName)
  return (
    <div className="App">
      <FeedBackButton setShow={setShow} show={show} />
      <Modal setShow={setShow} show={show} companyName={companyName} />
    </div>
  );
}

export default App;
