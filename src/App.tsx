import React, { useState } from 'react';
import './App.css';
import menuIcon from './assets/logoSort.png';
import { categories, Category } from './data/categories';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

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
            <h2>
              絞り込む
            </h2>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
          </div>
          
          <div className="category-scroll">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
                onClick={() => toggleCategory(category)}
              >
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