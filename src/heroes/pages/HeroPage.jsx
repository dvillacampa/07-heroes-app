import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroByID } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroByID ( id ), [ id ]);

  const onNavigateBack = () => {

    if(hero.publisher === "DC Comics") {
      navigate("/dc");
    } else {
      navigate("/marvel");
    }

  }

  if( !hero ) return <Navigate to="/" /> 
  
  return (
    <div className="row mt-5 col animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${ hero.id }.jpg`}
          alt={ hero.superhero }
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> { hero.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p className="">{ hero.characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >Go to { hero.publisher }
        </button>
      </div>
    </div>

  )
}
