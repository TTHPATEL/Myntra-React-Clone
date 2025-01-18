import { useSelector } from "react-redux";
const BagSummary = () => {
  const BagItemID = useSelector((store) => store.BagSlice);

  const items = useSelector((store) => store.items);
  const FinalItems = items.filter((item) => {
    const itemIndex = BagItemID.indexOf(item.id);
    return itemIndex >= 0;
  });
  let CONVIENIENCE_FEES = FinalItems.length === 0 ? 0 : 99;
  let totalItem = BagItemID.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  FinalItems.forEach((item) => {
    totalMRP = totalMRP + item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + CONVIENIENCE_FEES;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVIENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button
        className="btn-place-order"
        style={{ marginBottom: "370px" }}
        onClick={() => alert(`The amount of ${finalPayment} order is placed. `)}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
