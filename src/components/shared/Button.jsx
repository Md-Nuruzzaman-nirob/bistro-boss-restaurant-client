import PropTypes from "prop-types";

const Button = ({ children, className }) => {
  return (
    <div
      className={`btn btn-sm bg-[#E8E8E8] hover:bg-[#BB8506]  text-[#BB8506] hover:text-[#E8E8E8] border-0 border-b-4 border-[#BB8506] hover:border-[#E8E8E8] rounded-lg transition-colors duration-500 ease-in-out outline-none ${className}`}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
