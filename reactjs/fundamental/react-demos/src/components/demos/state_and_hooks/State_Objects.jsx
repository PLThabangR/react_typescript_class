import { useState } from "react"


const State_Objects = () => {

const [movies,setMovies]= useState([{
    id:1,
    title:"Iron Man",
    year:2004
},
{  id:2,
    title:"Iron Man",
    year:2004},
    {  id:3,
    title:"The rookie",
    year:2018},
    {  id:4,
    title:"BlackList",
    year:2013},
    {  id:5,
    title:"Hopital hiest",
    year:2025},

])

const displayMovieData= movies.map((movie)=>
    (
        <div key={movie.id}>
            <h4>Title: {movie.title} </h4>
            <p>Year: {movie.year}</p>
         
        </div>
    )
)

  return (
    <main>
        <h1>Movies objec</h1>
        {movies.length >0 && displayMovieData}

    </main>
  )
}

export default State_Objects