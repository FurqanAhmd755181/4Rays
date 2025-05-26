import React from 'react';
import { FiPlayCircle } from 'react-icons/fi'; // For the play icon
import bg from '../../../assets/How it works.png'
function Working() {
  return (
    <div
      className="relative text-white h-[1120px] mt-10"
      style={{
        backgroundImage: `url(${bg})`, // Replace with `import bg from './bg.png'` if it's in src
        backgroundSize: ' 100% 1120px',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
      }}
    >
     
    </div>
  );
}

export default Working;
