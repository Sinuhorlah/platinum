import React from 'react';
import './FlipCard.css';

const FlipCard = ({ frontImage, backImage, name, position, description, socialLinks }) => {
  return (
    <div className="flip-card group">
      <div className="flip-card-inner">
        
        <div className="flip-card-front bg-cover bg-center relative">
          <img src={frontImage} alt={name}
            className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded-lg">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm italic">{position}</p>
          </div>
        </div>
        
        <div
          className="flip-card-back bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 bg-cover bg-center text-white flex flex-col justify-center items-center rounded-lg"
       
        >
          <div className="p-4 text-center">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-md italic mb-4">{position}</p>
            <p className="text-md text-secondary ">{description}</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.588 0 0 .588 0 1.312v21.375C0 23.411.588 24 1.312 24h11.49V14.708h-3.188v-3.625h3.188V8.576c0-3.17 1.933-4.897 4.757-4.897 1.352 0 2.517.102 2.856.147v3.307l-1.96.001c-1.534 0-1.83.729-1.83 1.798v2.358h3.645l-.475 3.625h-3.17V24h6.216C23.411 24 24 23.411 24 22.688V1.312C24 .588 23.411 0 22.675 0z" />
                </svg>
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.569c-.885.391-1.833.654-2.825.774 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.002.959-3.127 1.184-.897-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.715-2.166-10.141-5.144-.425.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.191 4.096-.807-.026-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.631 1.953 2.445 3.376 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.17-.067 2.179 1.397 4.768 2.211 7.548 2.211 9.054 0 14.002-7.496 14.002-13.986 0-.21-.006-.423-.017-.634.961-.689 1.8-1.56 2.462-2.548l-.047-.02z" />
                </svg>
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-700 transition"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M7.75 2C4.41 2 2 4.42 2 7.75v8.5C2 19.58 4.41 22 7.75 22h8.5c3.34 0 5.75-2.42 5.75-5.75v-8.5C22 4.42 19.59 2 16.25 2h-8.5zM12 5.47c1.73 0 3.14 1.41 3.14 3.14 0 1.73-1.41 3.14-3.14 3.14-1.73 0-3.14-1.41-3.14-3.14 0-1.73 1.41-3.14 3.14-3.14zM18.04 7c.43 0 .79.36.79.79 0 .43-.36.79-.79.79a.79.79 0 0 1-.79-.79c0-.43.36-.79.79-.79zm-6.04 4.21c2.11 0 3.85-1.73 3.85-3.85S14.11 3.51 12 3.51c-2.11 0-3.85 1.73-3.85 3.85s1.73 3.85 3.85 3.85zM12 20.5c-2.84 0-5.16-2.32-5.16-5.16 0-2.84 2.32-5.16 5.16-5.16 2.84 0 5.16 2.32 5.16 5.16 0 2.84-2.32 5.16-5.16 5.16z"
                    />
                </svg>
              </a>
            )}
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default FlipCard;