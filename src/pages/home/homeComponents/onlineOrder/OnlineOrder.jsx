import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import Container from "../../../../components/shared/Container";
import Title from "../../../../components/shared/Title";
import slider1 from "../../../../assets/home/slide1.jpg";
import slider2 from "../../../../assets/home/slide2.jpg";
import slider3 from "../../../../assets/home/slide3.jpg";
import slider4 from "../../../../assets/home/slide4.jpg";
import slider5 from "../../../../assets/home/slide5.jpg";

const OnlineOrder = () => {
  return (
    <Container className="py-10 lg:py-20">
      <Title title="ORDER ONLINE" subTitle="---From 11:00am to 10:00pm---" />

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SALAD
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            PIZZA
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SOUP
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            BURGER
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SALAD
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            PIZZA
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            SOUP
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3
            style={{
              color: "#fff",
              textShadow: `
            -1px -1px 0 #000,  
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
          `,
            }}
            className="text-xl font-semibold text-center -mt-16 mb-20"
          >
            BURGER
          </h3>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default OnlineOrder;
