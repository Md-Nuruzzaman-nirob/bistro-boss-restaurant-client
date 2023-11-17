import Button from "./Button";
import PropTypes from "prop-types";

const BoxCard = ({ data, orderPrice }) => {
  const { image, name, recipe, price } = data || {};
  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure>
        <img src={image} alt="image" className="rounded-t-xl w-full" />
      </figure>

      {orderPrice && (
        <div className="absolute top-5 right-5 badge bg-black badge-lg text-[#BB8506] border-none">
          <h3>${price}</h3>
        </div>
      )}
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mt-2">
          <Button title={"add to cart"}></Button>
        </div>
      </div>
    </div>
  );
};
BoxCard.propTypes = {
  data: PropTypes.object.isRequired,
  orderPrice: PropTypes.string.isRequired,
};

export default BoxCard;
