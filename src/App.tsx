import React, { useState } from 'react';
import './App.css';

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
        モーダルを開く
      </button>
      
      <div 
        className={`modal-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeModal}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>
            ×
          </button>
          
          <h2 style={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }}>
            カテゴリを選択
          </h2>
          
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