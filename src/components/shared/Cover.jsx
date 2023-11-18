import { Parallax } from "react-parallax";
import Container from "./Container";
import PropTypes from "prop-types";

const Cover = ({ bg, title, subTitle, className }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bg}
      bgImageAlt="cover"
      strength={-100}
    >
      <Container className={`py-8 md:py-12 lg:py-28 ${className}`}>
        <div className="text-center w-full lg:w-4/5 mx-auto px-2 md:px-5 py-5 md:py-14 lg:py-20 space-y-2 bg-black/50 text-white ">
          <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
          <p className="text-xs md:text-xs lg:text-base opacity-90">
            {subTitle}
          </p>
        </div>
      </Container>
    </Parallax>
  );
};

Cover.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
};

export default Cover;
