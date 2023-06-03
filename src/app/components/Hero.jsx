import Image from "next/image";
import Navbar from "./Navbar";

import play from "@/assets/play.svg";
import { RiMovie2Fill } from "react-icons/ri";

async function getMovies() {

  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=6bd440cbb960966121102c5166823a30"
  );
  const movies = await res.json();
  return movies;
}

const Hero = async () => {
  const movies = await getMovies();
  const movie = movies.results[0];
  //   console.log(movie);
  return (
    <div>
      <div className="w-full relative">
        <div className="w-full absolute -z-10 h-[100vh]">
          <div className="relative h-[100vh] w-full">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="hero"
              fill
              objectFit="cover"
              className="opacity-80"
            />
          </div>
        </div>
        <div className="z-10">
          <Navbar />

          <div className="w-full flex px-20 h-[90vh] items-center">
            <div className="flex-1 flex flex-col gap-3 w-[50%] text-white pr-[15rem]">
              <h2 className="text-[4rem] font-medium leading-[4rem]">
                {movie.title}
              </h2>

              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <RiMovie2Fill className="text-[#BE123C]" />
                  <p>{movie.media_type}</p>
                </div>
                / <p>{movie.release_date}</p>
              </div>

              <p className="">{movie.overview}</p>

              <div className="flex items-center gap-2 rounded-md justify-center py-1 px-1 bg-[#BE123C] w-1/3">
                <Image src={play} width={30} height={30} alt="play icon" />
                <span className="text-white text-sm font-medium">
                  WATCH TRAILER
                </span>
              </div>
            </div>

            <div className="flex-1 w-[50%]">
              <div className="w-full relative flex justify-end">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="hero"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
