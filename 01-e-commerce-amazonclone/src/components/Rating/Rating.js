import React from 'react';
import './rating.css'

const Rating = ({value, text, starColor}) => {
    return (
        <div className='rating'>
            <span>
                < i style={{color: starColor}} className={value >= 1 ? "fa-solid fa-star" : value >= 0.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
    
            <span>
                < i style={{color: starColor}} className={value >= 2 ? "fa-solid fa-star" : value >= 1.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
    
            <span>
                < i style={{color: starColor}} className={value >= 3 ? "fa-solid fa-star" : value >= 2.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
    
            <span>
                < i style={{color: starColor}} className={value >= 4 ? "fa-solid fa-star" : value >= 3.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
    
            <span>
                < i style={{color: starColor}} className={value >= 5 ? "fa-solid fa-star" : value >= 4.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </span>
            {/* If text exists show it. Same as text ? text: '' */}
            <span>{text && text}</span>
        </div>
    );
}

Rating.defaultProps = {
    starColor: '#ff9f00',
}

export default Rating


