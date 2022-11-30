import React from 'react';
import img from './erros.svg'

const ErrorPage = () => {
    return (
        <div>
            <div className="hero h-screen object-contain" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Ooops! Looks Like We're Lost</h1>
      <p className="mb-5"></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;