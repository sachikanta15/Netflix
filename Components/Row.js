import axios from '../pages/api/axios';
import React, { useEffect, useState } from 'react'

export default function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovie] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>
            {/* Note: here row psoter and row posters are used to to scroll which scroll in horizontal direction and looks like netflix */}
            <div className='row_posters'>
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&(
                    <img
                        className={`row_poster ${isLargeRow && "row_posterLarger"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                )))}
            </div>
        </div>
    )
}
