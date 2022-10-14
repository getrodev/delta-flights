import React from 'react'; 
import './Instructions.css';
import deltaSign from './delta-logo-4193.png';

const emojis = [
  {
    emoji: '✈️',
    name: "arrive"
  },
  {
    emoji: '✈️',
    name: "departure"
  },
  {
    emoji: '✈️',
    name: "arrivals"
  },
  {
    emoji: '✈️',
    name: "depart"
  }
];

export default function Instructions() {

  return(
    <div className="container">
      <img alt="delta airlines logo" src={deltaSign} />
      <p>Supporting You Through Your Travel Journey</p>
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button >
                <span role="img" aria-label={emoji.name}
                  id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
      <p>Forgot the Airport code? Start typing a city and we'll give you a few Suggestions....</p>
    </div>
  );
}


 