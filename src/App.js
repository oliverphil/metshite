import React, {useState} from 'react';
import Modal from 'react-modal';
import './App.css';

function App() {
  let [text, setText] = useState('');
  let [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <div id="header">
        <h1 style={styles.h1}>Metshite</h1>
        <h5 style={styles.h5}>What do you think of Metlink?</h5>
      </div>
      <input type="text" onChange={text => setText(text)} />
      <button onClick={() => setModal(true)} >Complain</button>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }}}
      >
        <h5>Me Too</h5>
      </Modal>
    </React.Fragment>
  );
}

const styles = {
  h1: {
    textAlign: 'center'
  },
  h5: {
    textAlign: 'center'
  }
}

export default App;
