import React from 'react'
import { movieDTO } from './movies.model';
import css from './individualMovie.module.css'

const IndividualMovie = (props: movieDTO) => {

const buildLink = () => `/movie/${props.id}`
  return (
    <div className={css.div}>
        <a href={buildLink()}>
            <img src={props.poster} alt="Poster" />
        </a>
        <p>
            <a href={buildLink()}>{props.title}</a>
        </p>
    </div>
  )
}

export default IndividualMovie