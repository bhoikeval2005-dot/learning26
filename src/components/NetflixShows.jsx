import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign: 'center'}}>
    <h1>NetflixShows</h1>
    <ul>
      <li>
        <Link to ="/watch/radhakrishna"  ><h2>Radha Krishan</h2></Link>
      </li>
      <li>
        <Link to="/watch/pokemon" ><h2>Pokemon</h2></Link>
      </li>
      <li>
        <Link to="/watch/demonslyer"><h2> Demon Slyer</h2></Link>
      </li>
    </ul>
    </div>
  )
}
