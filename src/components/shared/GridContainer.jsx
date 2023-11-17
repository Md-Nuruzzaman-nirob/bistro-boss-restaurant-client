import PropTypes from "prop-types";

const GridContainer = ({ children, className }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ${className}`}
    >
      {children}
    </div>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default GridContainer;
