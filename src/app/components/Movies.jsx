"use client";
import Card from "./Card";
import { useFetch } from "../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const Movies = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=6bd440cbb960966121102c5166823a30&language=en-US"
    const movies = await useFetch(url);
    // console.log(movies);
    return (
        <div>
            <div className="w-full relative h-[100vh] px-20 pt-20 ">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold text-[2rem]">Movies</h2>
                    <Link href="/movies">
                        <span className="text-[#BE123C]">See More</span>
                    </Link>
                </div>

                <div className="overflow-hidden relative flex  items-center w-full h-[80%]">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {movies.map((movie, index) => (

                            <SwiperSlide key={index}>
                                <Card
                                    title={movie.title}
                                    imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    year={movie.release_date}
                                    alt={movie.title}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Movies;