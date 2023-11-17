import PropTypes from "prop-types";

const Title = ({ title, subTitle, className }) => {
  return (
    <div className={` ${className}`}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Title;
