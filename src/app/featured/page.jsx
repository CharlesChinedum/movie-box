import React from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/Card";
import BackButton from "../components/BackButton";


const FeaturedPage = async () => {
  const key = process.env.API_KEY;
  const url =
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
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

export default FeaturedPage;
