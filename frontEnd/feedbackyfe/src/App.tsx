import { useState } from 'react';
import './App.css';
import FeedBackButton from './Components/FeedbackButton/FeedBackButton';
import Modal from './Components/Modal/Modal';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <FeedBackButton setShow={setShow} show={show} />
      <Modal setShow={setShow} show={show} />
    </div>
  );
}

export default App;
