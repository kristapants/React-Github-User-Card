import React from 'react';
import Card from './Card';

const CardContainer = ({ data, friends }) => {
    return (
        <div className="container">
            <div className="row mb-2">
                {friends.map(friend => (
                    <Card
                        key={friend.id}
                        friend={friend}
                    />
                ))}
            </div>
        </div>
    )
}
export default CardContainer;