import React from 'react';
import HeroCard from './HeroCard';
import './card.scss';
import heroData from '../../json-data.json';

const HeroList = () => {
    return (
        <div className='card'>
            {
                heroData.map(hero =>
                    <HeroCard 
                        key={hero.id}
                        hero={hero}
                    />
                )
            }
        </div>
    )
}

export default HeroList
