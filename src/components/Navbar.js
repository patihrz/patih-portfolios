import React from 'react';

const Navbar = ({ searchTerm, handleSearchChange }) => {
  const navigateToGitHub = () => {
    window.open('https://github.com/patihrz', '_blank');
  };

  const navigateToHome = () => {
    window.open('/', '_self');
  };

  return (
    <nav className="bg-black flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 border-b border-gray-700">
      {/* Logo box letter animation */}
      <div className="flex items-center space-x-1 cursor-pointer" onClick={navigateToHome}>
        {'PATIHRAMADIKA'.split('').map((char, index) => (
          <div
            key={index}
            className="box w-6 h-6 md:w-7 md:h-7 text-white bg-gradient-to-r from-gray-300 via-pink-500 to-purple-500 font-bold text-xs md:text-sm flex items-center justify-center rounded-sm animate-bounce"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* Search & GitHub */}
      <div className="flex items-center space-x-4">
        {searchTerm !== undefined && handleSearchChange && (
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by Name"
            className="bg-gray-800 text-white px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm w-[180px] md:w-[250px]"
          />
        )}
        <button onClick={navigateToGitHub} className="text-gray-300 hover:text-white transition-all duration-200">
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-7 md:h-7"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 
              5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 
              13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 
              1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 
              0-1.5 3.78c0 5.42 3.3 6.61 6.44 
              7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
