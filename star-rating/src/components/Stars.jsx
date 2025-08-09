import { useState } from 'react'
import './styles/Stars.css'

const DEFAULT_AMOUNT = 5;
const DEFAULT_ICON = '★';
const DEFAULT_UNSELECTED_COLOR = 'grey';
const DEFAULT_COLOR = 'yellow';
const DEFAULT_ICON_SIZE = 60;

function Stars( {amount, icon, iconSize, selectedColor} ) {
  
  const [rating, setRating] = useState(0);
  const [temporaryRating, setTemporaryRating] = useState(0);

  const array = Array(amount || DEFAULT_AMOUNT).fill(icon || DEFAULT_ICON);

  const handleClick = (rating) => {
    setRating(rating);
  }

  return (
    <>
      <div className='icons-container'>
        {array.map((it, index) => {
            // const isActiveColor = ((rating || temporaryRating) && (rating || index < temporaryRating));
            const isActiveColor = index < (temporaryRating || rating);
            return (
              <div className='icon'
                   key={index}
                   style={{fontSize: `${iconSize || DEFAULT_ICON_SIZE}px`,
                           color: selectedColor || DEFAULT_COLOR,
                           filter: `${isActiveColor ? 'grayscale(0%)' : 'grayscale(100%)'}`
                   }}
                   onMouseEnter={() => setTemporaryRating(index + 1)}
                   onMouseLeave={() => setTemporaryRating(0)}
                   onClick={() => handleClick(index + 1)}
              >
                
              {it}</div>
            );
        })}
      </div>
    </>
  );
}

export default Stars;