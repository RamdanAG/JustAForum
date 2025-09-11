import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-post');
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <button 
          onClick={handleClick}
          className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-left text-gray-500 transition"
        >
          Apa yang Anda pikirkan?
        </button>
      </div>
      <div className="flex justify-around mt-4 pt-4 border-t">
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Foto/Video</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Perasaan/Aktivitas</span>
        </button>
      </div>
    </div>
  );
};

export default NewPost;