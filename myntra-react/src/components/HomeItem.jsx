import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddtoBag, RemoveFromBag } from "../store/BagSlice";
const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.BagSlice);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();

  const handleOnAddtoCart = () => {
    dispatch(AddtoBag(item.id));
    console.log(`${item.id} was Clicked...`);
  };
  const handleOnRemoveCart = () => {
    dispatch(RemoveFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn-add-bag btn btn-danger"
          onClick={() => handleOnRemoveCart()}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-success"
          onClick={() => handleOnAddtoCart()}
        >
          <GrAddCircle />
          {"   "}Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
