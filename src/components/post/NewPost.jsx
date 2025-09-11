import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/new-post.css';

const NewPost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-post');
  };

  return (
    <div className="new-post-container">
      <div className="new-post-header">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="User"
          className="new-post-avatar"
        />
        <button 
          onClick={handleClick}
          className="new-post-input"
        >
          Apa yang Anda pikirkan?
        </button>
      </div>
      <div className="new-post-actions">
        <button className="new-post-action-btn">
          <svg className="new-post-action-icon red" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Foto/Video</span>
        </button>
        <button className="new-post-action-btn">
          <svg className="new-post-action-icon green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Perasaan/Aktivitas</span>
        </button>
      </div>
    </div>
  );
};

export default NewPost;