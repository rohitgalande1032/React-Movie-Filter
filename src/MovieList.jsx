import React, { useState } from 'react'

const MovieList = ({movie, setMovie}) => {
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {movie.map((movi, index) => (
                <tr key={index}>
                    <td>{movi.title}</td>
                    <td>{movi.genre}</td>
                    <td>{movi.year}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default MovieList