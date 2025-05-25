import React from 'react';
import './down.css';

function Download() {

  return (
    <div className='background-element'>
      <div className='box-container'>
        <h1 className="file">The file for windows is here: {'     '}<button className="download-button">Download</button></h1>
      </div>
    </div>
  );
}

export default Download;