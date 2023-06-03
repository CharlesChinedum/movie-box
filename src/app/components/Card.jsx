import Image from "next/image";
import React from "react";

const Card = ({ title, imageUrl, alt, genre, country, year }) => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <Image src={imageUrl} alt={alt} width={300} height={300} />
        {/* <p>{title}</p> */}
      </div>
    </div>
  );
};

export default Card;
{/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide> */}