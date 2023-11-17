import PropTypes from "prop-types";

const Title = ({ title, subTitle, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-[#BB8506]">{subTitle}</p>
      <h2 className="text-xl lg:text-2xl text-[#1F2937] font-medium border-y-2 border-[#BB8506] w-fit mx-auto mt-4 mb-10 py-1">
        {title}
      </h2>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
