import React, { useState, useEffect } from 'react';
import './assets/scss/List.scss';

const List = ({ setSelectedCard }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data/db.json')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <div className="list col">
            <h2 className="list-header mb-5">List elements</h2>
            <div className='elements p-5 border text-center d-flex flex-wrap gap-5'>

                {data &&
                    data.map((card) => (
                        <p className='element-p' key={card.id} onClick={() => handleCardClick(card)}>
                            {card.name}
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default List;