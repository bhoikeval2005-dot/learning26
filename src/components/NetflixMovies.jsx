import React from 'react'
import { Link } from 'react-router-dom'
export const NetflixMovies = () => {

  var movies=[
    {movieId:1,movieName:"Kanchana"},
    {movieId:2,movieName:"Bahubali"},
    {movieId:3,movieName:"Kantara 2"}
  ]
  return (
    <div style={{textAlign: 'center'}}>
        <h1>NetflixMovies</h1>
       {
        movies.map((movie)=>{
          return <li>
            <Link to={`/watch/${movie.movieName}`}><h2>{movie.movieName}</h2></Link>
          </li>
        })
       }
        </div>
  )
}
