const MovieCard = ({movie}) => {
   return (  
      <div className="movie">
         <div>
            <p>{movie.Year}</p>
         </div>

         {/* for the movie image/poster */}
         <div>
            <img src={movie.Poster} alt="poster" />
         </div>

         {/* other info */}
         <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
         </div>

      </div>
   );
}
 
export default MovieCard