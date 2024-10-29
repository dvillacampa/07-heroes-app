import React from 'react'
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    
    return alter_ego !== characters ? <p>{ characters }</p> : <></>;

};

export const HeroCard = ({ hero }) => {

    const heroImgUrl = `/assets/heroes/${ hero.id }.jpg`;


    return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img 
                        className="card-img" 
                        src={ heroImgUrl } 
                        alt={ hero.superhero } 
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ hero.superhero }</h5>
                        <p className="card-text">{ hero.alter_ego }</p>

                        <CharactersByHero alter_ego={hero.alter_ego} characters={hero.characters} />
                        
                        <p className="card-text">
                            <small className="text-muted">{ hero.first_appearance}</small>
                        </p>

                        <Link to={ `/hero/${ hero.id }` }>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
