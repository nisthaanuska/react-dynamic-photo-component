import React from 'react'
import '../Styles/photo.css'
const Photo = ({ check, image }) => {
    let photoClass;
    if (check === 'circle')
        photoClass = 'circlephoto'
    else if (check === 'square')
        photoClass = 'squarephoto'
    else if (check === 'triangle')
        photoClass = 'trianglephoto'
    else
        photoClass = 'rectanglephoto'
    return (
        <div>
            <img src={image} className={photoClass} alt="" />
        </div>
    );
}
export default Photo


