import React, { useState } from 'react';
import './App.css'; // CSSは別ファイルに分けています

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">

      <button className="circle-button" onClick={openModal}>
        モーダルを開く
      </button>

      <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <p>これはモーダルです。</p>
          <button onClick={closeModal}>閉じる</button>
        </div>
      </div>
    </div>
  );
}

export default App;





