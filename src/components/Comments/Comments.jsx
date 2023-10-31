import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import useFetch from "../../hooks/useFetch";

function Comments() {
  const { loading, data } = useFetch("http://localhost:5000/comments", "");

  return (
    <div className="commenst-container p-[20px]">
      <Swiper slidesPerView={3}>
        {data ? (
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="comment w-[400px] h-[440px] rounded-[20px] border border-blue p-10 pt-28 flex flex-col justify-between">
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
