import React, { useState, useEffect } from 'react';
import './App.css';
import menuIcon from './assets/logoSort.png';
import { categories, Category } from './data/categories';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [blog, setBlog] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://admin-panel-delta-six.vercel.app/api/blog');
        const data = await res.json();
        setBlog(data.posts);
        console.log('blog state:', data.posts); // データを出力
      } catch (error) {
        console.error('ブログデータの取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, []);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="App">
      <button className="circle-button" onClick={() => setIsOpen(true)}>
        <img src={menuIcon} alt="メニュー" />
      </button>
      
      <div
        className={`modal-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>絞り込む</h2>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          
          <div className="category-scroll">
            {categories.map((category, index) => (
              <button 
                key={category} // indexをkeyとして使用するのを避ける
                className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div>読み込み中...</div>
          ) : (
            blog.length > 0 && (
              <div className="blog-container">
                {/* ブログデータの表示 */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;