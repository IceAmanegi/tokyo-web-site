import React, { useState } from 'react';
import './App.css';
import menuIcon from './assets/logoSort.png';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const categories = [
    'グルメ', 'イベント', '日常',
    '観光', '絶景', '特集',
    '体験', '多摩市', '奥多摩'
  ];

  return (
    <div className="App">
      <button className="circle-button" onClick={openModal}>
        <img src={menuIcon} alt="メニュー" />
        
      </button>
      
      <div
        className={`modal-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeModal}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 style={{ fontSize: '14px', color: 'gray', margin: 0 }}>
              絞り込む
            </h2>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
          </div>
          
          <div className="category-scroll">
            {categories.map((category, index) => (
              <button key={index} className="category-button">
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;