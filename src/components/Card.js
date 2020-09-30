import React from 'react';

const Card = ({ friend }) => {
    return (
        <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">{friend.name}</strong>
                    <h3 className="mb-0">{friend.login}</h3>
                    <div className="mb-1 text-muted">{friend.location}</div>
                    <p className="card-text mb-auto">{friend.bio}</p>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" style={{height: 200}} src={friend.avatar_url} data-holder-rendered="true" alt="Thumbnail [200x250]" />
            </div>
        </div>
    )
}
export default Card;