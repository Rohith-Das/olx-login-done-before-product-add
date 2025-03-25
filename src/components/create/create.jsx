import React from "react";

import './create.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Home from "../Home/Home";
const Create = () => {

    const navigate = useNavigate();

    const categories = [
        { id: 'mobile', name: 'Mobile Phones', icon: '📱' },
        { id: 'bike', name: 'Motorcycles & Bikes', icon: '🏍️' },
        { id: 'car', name: 'Cars', icon: '🚗' },
        { id: 'house', name: 'Real Estate', icon: '🏠' },
        { id: 'job', name: 'Jobs', icon: '💼' },
        { id: 'electronics', name: 'Electronics & Appliances', icon: '⚡' },
        { id: 'furniture', name: 'Furniture', icon: '🪑' },
        { id: 'fashion', name: 'Fashion', icon: '👕' }
      ];

      const handleCategorySelect = (categoryId) => {
        navigate(`/create/${categoryId}`);
      };

  return (
        <div>
      {/* <Navbar /> */}
      <Home/>
      <div className="create-container">
        <h1>POST YOUR AD</h1>
        <h2>Choose a category</h2>
        
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => handleCategorySelect(category.id)}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Create;