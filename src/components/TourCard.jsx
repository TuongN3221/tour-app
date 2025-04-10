import React, { useState } from 'react';

//Tour card renders individual tour details
const TourCard = ({ id, name, info, price, image, onRemove}) => {
    // local state to toogle Read More/Show Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className ="tour-card">
            <h3>{name}</h3>
            <h5> {info}</h5>
            <img src={image} alt={name} />
            <h4>Price: ${price}</h4>
            <p>
                {/* Shows full description if readMore is true, otherwise a slice */}
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {/* Toggles between Read More and Show Less */}
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
            {/* Button to remove the tour card from the list */}
            <button className="remove-btn" onClick={() => onRemove(id)}>
                Not Interested
                </button>

        </article>
    )
}

export default TourCard;