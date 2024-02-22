import { useEffect, useState } from "react";
import IndividualMovie from "./movies/IndividualMovie";
import MoviesList from "./movies/MoviesList";
import { landingPageDTO, movieDTO } from "./movies/movies.model";


function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheatres: [
          {
            id: 1,
            title: 'Spider Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png'
          },
          {
            id: 3,
            title: 'Spactacus',
            poster: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Spartacus_-_1960_-_poster.png'
          },
        ],

        upcomingReleases: [
          {
            id: 4,
            title: 'Kingdom of the Planet of the Apes',
            poster: 'https://m.media-amazon.com/images/M/MV5BNDcxM2RiOWMtMGEzMC00NDEyLTgzMjEtOWZjYzVhN2E2ZjcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  });


//   const inTheatres: movieDTO[] = [
//     {
//       id: 1,
//       title: 'Spider Man: Far From Home',
//       poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
//     },
//     {
//       id: 2,
//       title: 'Luca',
//       poster: 'https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png'
//     },
//     {
//       id: 3,
//       title: 'Spactacus',
//       poster: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Spartacus_-_1960_-_poster.png'
//     },
// ];

// const upcomingReleases: movieDTO[] = [
//   {
//       id: 4,
//       title: 'Kingdom of the Planet of the Apes',
//       poster: 'https://m.media-amazon.com/images/M/MV5BNDcxM2RiOWMtMGEzMC00NDEyLTgzMjEtOWZjYzVhN2E2ZjcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg'
//     },
// ];


  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheatres}/>

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases}/>
    </>
  );
}

export default App;
