import React from 'react'

const Footer = () => {
  return (
      <div>
        <footer className="w-full text-sm flex flex-col items-center justify-center text-slate-200">
          &copy; {new Date().getFullYear()} Herb Segismar. All rights reserved!
        </footer>
      </div>
  );
}

export default Footer