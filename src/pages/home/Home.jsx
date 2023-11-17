import Banner from "./homeComponents/banner/Banner";
import HomeMenu from "./homeComponents/homeMenu/HomeMenu";
import OnlineOrder from "./homeComponents/onlineOrder/OnlineOrder";
import HomeRecommends from "./homeComponents/recommendsSection/HomeRecommends";
import TestimonialSection from "./homeComponents/testimonialSection/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <OnlineOrder />
      <HomeMenu />
      <HomeRecommends />
      <TestimonialSection />
    </div>
  );
};

export default Home;
