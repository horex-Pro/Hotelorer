import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import useFetch from "../../hooks/useFetch";

function Comments() {
  const { loading, data } = useFetch("http://localhost:5000/comments", "");

  return (
    <div className="commenst-container p-[20px] flex flex-wrap">
      <h2 className=" text-[40px] font-medium">
        What you say about<span className="text-blue"> Hotelorer:</span>
      </h2>
      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-4"
        breakpoints={{
          0: { slidesPerView: 1 }, // 1 card per page on mobile
          768: { slidesPerView: 3 }, // 3 cards per page on larger screens
        }}
      >
        {data ? (
          data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="comment max-w-[400px] h-[440px] rounded-[20px] border border-blue p-10 pt-28 flex flex-col justify-between max-lg:w-full">
                <p className="body text-[30px] font-light text-justify">
                  {item.body}
                </p>
                <div className="footer flex items-center gap-4">
                  <img
                    alt=""
                    className="w-[80px] h-[80px] rounded-full"
                    src={item.pictureUrl}
                  />
                  <div className="info">
                    <h5>{item.userName}</h5>
                    <span>{item.job}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>loading...</p>
        )}
      </Swiper>
    </div>
  );
}

export default Comments;
