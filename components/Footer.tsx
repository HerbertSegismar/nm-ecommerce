import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
      <div>
        <footer className="absolute bottom-0 w-full text-sm flex flex-col items-center justify-center text-slate-200">
          &copy; {new Date().getFullYear()} Herb Segismar
        </footer>
      </div>
  );
}

export default Footer