import React from 'react';

export default function NotFound() {
  return (
    <div className="container text-center">
      <h1 className="display-1">
        <span className="text-danger">404</span>
      </h1>
      <h2 className="display-4">Page Not Found</h2>
      <p className="lead">Sorry, that page does not exist.</p>
    </div>
  );
}
