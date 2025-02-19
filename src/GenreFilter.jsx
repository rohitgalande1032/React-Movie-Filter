import React from 'react'
import './App.css'

const GenreFilter = ({movie, setMovie}) => {

    const onFilter = (genre) => {
        const filteredMovie = movie.filter((item) => item.genre === genre);
        setMovie(filteredMovie);
        console.log("Filtered By: ", genre);
    }
    const uniqueGenres = [...new Set(movie.map((movi) => movi.genre))];
  return (
    <div className="genre-filter">
        <h2>Filter by Genre</h2>
        <div className='genre_buttons'>
            {uniqueGenres.map((genre, index) => (
                <button onClick={()=>onFilter(genre)} key={index} button>{genre}</button>
            ))}
        </div>
    </div>  
  )
}

export default GenreFilter