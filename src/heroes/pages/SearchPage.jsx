import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { HeroCard } from '../components/HeroCard';

import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse( location.search);

  const heroes = getHeroesByName( q );

  const showSearchAlert = ( q.length === 0 );
  const showErrorAlert = ( q.length >0 && heroes.length === 0 );

  const { searchText, onInputChange } = useForm ({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if ( searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText.toLowerCase().trim() }`);
    
  }

  return (
    <>
      <h1>Serarch Hero</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Introduce a hero name</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }/>
                
              <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div 
            className="alert alert-primary animate__animated animate__fadeIn"
            style = {{ display: showSearchAlert ? '' : 'none' }}
           >
            Search a hero
          </div>

          <div 
            className="alert alert-danger animate__animated animate__shakeY"
            style = {{ display: showErrorAlert ? '' : 'none' }}>
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map(
              hero => (<HeroCard key={ hero.id } hero={ hero } />
            ))
          }
          
        </div>
      </div>
      
    </>
  )
}
