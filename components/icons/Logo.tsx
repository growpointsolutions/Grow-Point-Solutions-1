
import React from 'react';

export const Logo: React.FC<{ isWhite?: boolean }> = ({ isWhite = false }) => (
  <div className="flex items-center space-x-3">
    <svg width="40" height="40" viewBox="0 0 50 50" className={isWhite ? 'text-white' : 'text-blue-800'}>
      <defs>
        <clipPath id="leafClip">
          <path d="M15 45 C 30 45, 45 30, 45 15 C 45 30, 30 45, 15 45 Z" />
        </clipPath>
      </defs>
      
      {/* Bars */}
      <rect x="10" y="25" width="5" height="15" fill="currentColor" />
      <rect x="18" y="20" width="5" height="20" fill="currentColor" />
      <rect x="26" y="15" width="5" height="25" fill="currentColor" />

      {/* Leaf */}
      <path d="M15 45 C 30 45, 45 30, 45 15 C 45 30, 30 45, 15 45 Z" className={isWhite ? 'text-gray-300' : 'text-green-600'} fill="currentColor" />
      
      {/* Arrow */}
      <path d="M25 5 L 45 25 L 35 25 L 35 10 Z" transform="rotate(10 35 15)" fill="currentColor" clipPath="url(#leafClip)" />
    </svg>
    <div className={isWhite ? 'text-white' : 'text-blue-900'}>
      <span className="text-xl font-extrabold tracking-tight">GROW POINT</span>
      <span className="block text-xs font-semibold tracking-widest -mt-1">SOLUTIONS</span>
    </div>
  </div>
);
