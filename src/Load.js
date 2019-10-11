import React from 'react';

const Load = props => {

    const loadAnotherTen = () => {
        props.loadTickets(10);
    };

    return (

        <div className="load" onClick={loadAnotherTen}>
            Показать еще 10 билетов
        </div>
    )
};

export default Load;