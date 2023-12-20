import React, { useState, useEffect } from 'react';
import './App.css';
import SeoulDistrictButtons from './SeoulDistrictButtons';

function App() {
  
  return (
    <div className="App">
      <nav>
        <div className='blog'>서비스명</div>
      </nav>

      <body>
        <div>
          <SeoulDistrictButtons />
        </div>
      </body>

      
    </div>
  );
}

export default App;
