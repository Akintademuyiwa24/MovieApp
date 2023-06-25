
import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

//3cbc099c

const API_URL = 'http://www.omdbapi.com/?apikey=3cbc099c&';





const App = () => {
   // for useState...for each movie component
   const [movies,setMovies] = useState([]);

   //useState for search
   const [searchTerm, setSearchTerm] = useState ('')


   //
   const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json();

      setMovies(data.Search)
   
     console.log(data)

      
   }
//call the use effect
useEffect(() => {
   searchMovies('Avengers')
}, []);

   return (
      <div className="app">
         <h1>MovieLand</h1>

         <div className="search">
            <input 
               placeholder="Search for a movie"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             <img 
             src={searchIcon} 
             alt="search" 
             onClick={() => searchMovies(searchTerm)}
             />
         </div>

         {
            movies?.length > 0
            ? (
               <div className="container">
                  {movies.map((movie) => (
                     <MovieCard movie ={movie}/>
                  ))}
               </div>
            ) : (
               <div className="empty">
                  <h2>No movies</h2>
               </div>
            )
         } 

         {/* <div className="container"> */}
            {/* <MovieCard movie1 = {movies}/> */}
         {/* </div> */}
      </div>
      
     );
}
 
export default App;