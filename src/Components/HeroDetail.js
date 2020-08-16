import React, { useState, useEffect, Fragment } from 'react';
import heroData from '../json-data.json'; 
import { Link } from 'react-router-dom';
import './hero-detail.scss';

const HeroDetail = ({ match }) => {
    const [hero, setHero] = useState({
        name: '',
        image: '',
        detail: '',
        quirk: ''
    });

    useEffect(() => {
        const heroName = match.params.hero;
        setHero(heroData.filter(hero => heroName === hero.name)[0]);
    }, [match.params.hero]);


    return (
        <Fragment>
            <div className='container'>
                <Link to='/' className='btn'>&larr; Back</Link>
                <div className='hero-detail'>
                    <img src={`/images/heroes/${hero.image}`} alt={hero.name} className="hero-image"/>
                    <div className="hero-info">
                        <span className="hero-info-details">{hero.detail}</span>
                        <span className="hero-info-name">Name: {hero.name}</span>
                        <span className="hero-info-skills">Quirk: {hero.quirk}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeroDetail
