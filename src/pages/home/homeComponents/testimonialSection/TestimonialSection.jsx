import { MagnifyingGlass } from "react-loader-spinner";
import Container from "../../../../components/shared/Container";
import Title from "../../../../components/shared/Title";
import useFetch from "../../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
  const { data, loader } = useFetch(`/api/v1/review`);

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#BB8506"
        />
      </p>
    );
  }
  return (
    <Container className={"py-10 lg:py-20"}>
      <Title title={"TESTIMONIALS"} subTitle={"---What Our Clients Say---"} />
      <Swiper
        slidesPerView={1}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {data?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center w-10/12 mx-auto mb-10 lg:mb-20">
              <div className="flex flex-col justify-center items-center">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 my-5 lg:my-10"></FaQuoteLeft>
              </div>
              <p className="text-xs md:text-sm lg:text-base">
                {review.details}
              </p>
              <h3 className="text-[#BB8506] md:text-lg lg:text-xl font-medium mt-2">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TestimonialSection;
