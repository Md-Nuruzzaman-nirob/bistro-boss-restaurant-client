import PropTypes from "prop-types";

const Card = ({ data }) => {
  const { image, name, recipe, price } = data || {};

  return (
    <div className="flex justify-between items-center gap-5">
      <img
        className="w-16 h-16 lg:w-24 lg:h-24 rounded-r-full rounded-b-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="md:text-lg lg:text-xl font-medium mb-1">{name}</h3>
        <p className="text-[10px] md:text-xs lg:text-sm xl:text-base opacity-80">
          {recipe}
        </p>
      </div>
      <p className=" badge badge-sm lg:badge-md xl:badge-lg bg-[#BB8506] font-light text-white">
        ${price}
      </p>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
