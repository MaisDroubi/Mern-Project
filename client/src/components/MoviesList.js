import '../styles/movies.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import 'react-slice';
const MoviesList = (props) => {
	const [movies, setMovies] = useState([]);
	
	useEffect(()=>{
		if (props.selectedategory==""){
			axios.get('http://localhost:8000/api/getAllMovies')
			.then(res=>{
			  setMovies(res.data);
			});
		}
		else{
			axios.get('http://localhost:8000/api/getCategory/'+props.selectedategory)
			.then(res=>{
				setMovies(res.data.Movies)
			}
			  );
		}
		
	
	},[props.selectedategory])

	return (
		<div className='movie-container'>
			
			{movies.map((movie) =>

			<div className="movie" >
				<img src={movie.imageUrl} alt="poster" />
				<div className="movie-date">
				<h4>{
                    movie.showingDate.slice(0,10)}  |  {
						movie.showingDate.slice(11,16)}<br />
                                        </h4>
				</div>
				<div className="overview">
					<div>
						<h4>{movie.title}</h4>
						
						<iframe src={movie.trailerUrl} height="100%" width="100%" title="W3Schools Free Online Web Tutorials"></iframe>
						<p>{movie.description}</p>
					</div>
					

					<button className="buy">Book Now</button>

				</div>
			</div>
			)}
			
		</div>
	);
};

export default MoviesList;
