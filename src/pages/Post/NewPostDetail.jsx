import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/new-post-detail.css';

const NewPostDetail = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [feeling, setFeeling] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Logic untuk submit post
    console.log('Posting:', { content, images, feeling });
    // Navigate back to feed
    navigate(-1);
  };

  return (
    <div className="new-post-detail-page">
      <div className="new-post-detail-container">
        {/* Header */}
        <div className="new-post-detail-header">
          <button
            onClick={() => navigate(-1)}
            className="new-post-detail-back-btn"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="new-post-detail-title">Buat Postingan</h1>
          <button
            onClick={handleSubmit}
            className="new-post-detail-post-btn"
          >
            Posting
          </button>
        </div>

        {/* Content */}
        <div className="new-post-detail-content">
          {/* User Info */}
          <div className="new-post-detail-user-info">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="User"
              className="new-post-detail-user-avatar"
            />
            <div>
              <div className="new-post-detail-user-name">Nama User</div>
              <div className="new-post-detail-user-privacy">Publik</div>
            </div>
          </div>

          {/* Text Input */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Apa yang Anda pikirkan?"
            className="new-post-detail-textarea"
            autoFocus
          />

          {/* Feeling/Activity */}
          {feeling && (
            <div className="new-post-detail-feeling">
              <span className="new-post-detail-feeling-text">Merasa</span>
              <span className="new-post-detail-feeling-value">{feeling}</span>
              <button
                onClick={() => setFeeling('')}
                className="new-post-detail-feeling-remove"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          )}

          {/* Images Preview */}
          {images.length > 0 && (
            <div className="new-post-detail-images-preview">
              <div className="new-post-detail-images-grid">
                {images.map((img, index) => (
                  <div key={index} className="new-post-detail-image-item">
                    <img
                      src={img}
                      alt={`Preview ${index + 1}`}
                      className="new-post-detail-image-preview"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="new-post-detail-image-remove"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="new-post-detail-actions">
            <div className="new-post-detail-actions-container">
              <label className="new-post-detail-action-btn">
                <svg className="new-post-detail-action-icon red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Foto/Video</span>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleImageUpload}
                  className="new-post-detail-file-input"
                />
              </label>
              <button 
                onClick={() => setFeeling('Senang')}
                className="new-post-detail-action-btn"
              >
                <svg className="new-post-detail-action-icon green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Perasaan/Aktivitas</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostDetail;
