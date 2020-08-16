import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({ hero }) => {
    return (
        <div className='card-item'>
            <div className="card-image">
                <img src={`images/heroes/${hero.image}`} alt="Hero"/>
            </div>
            <div className="card-info">
                <span className="details">{hero.detail}</span>
                <span className="name">Name: {hero.name}</span>
                <span className="skills">Quirk: {hero.quirk}</span>
                <Link to={`/hero/${hero.name}`} className='btn'>View Hero Details</Link>
            </div>
        </div>
    )
}

export default HeroCard
