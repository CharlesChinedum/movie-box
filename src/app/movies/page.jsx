import React from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/Card";
import BackButton from "../components/BackButton";


const MoviesPage = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=6bd440cbb960966121102c5166823a30&language=en-US"
    const movies = await useFetch(url);
    return (
        <div>
            <div className="px-[8.9rem] py-10">
                <BackButton />
                <h1 className="font-semibold text-[2rem] mt-[1rem] mb-[2rem]">Featured Page</h1>
                <div className="w-full justify-center flex flex-wrap gap-[2rem]">
                    {movies.map((movie, index) => (
                        <Card
                            title={movie.title}
                            imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            year={movie.release_date}
                            alt={movie.title}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoviesPage;
