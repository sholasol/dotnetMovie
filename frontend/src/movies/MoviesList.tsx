import React from 'react'
import { movieDTO } from './movies.model'
import IndividualMovie from './IndividualMovie';
import css from './moviesList.module.css'
import Loading from '../utils/Loading';

interface moviesListsProps {
    movies?: movieDTO[];
}


const MoviesList = (props: moviesListsProps) => {

  if(!props.movies) {
    return <Loading />
  }else if(props.movies.length === 0){
    return <>There are no movies at this time.</>
  } else {
      return (
        <div className={css.div}>
            {props.movies.map(movie =>
                <IndividualMovie {...movie} key={movie.id} />)}
        </div>
  )
  }

  
}

export default MoviesList