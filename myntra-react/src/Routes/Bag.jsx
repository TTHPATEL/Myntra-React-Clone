import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const Items = useSelector((store) => store.items);
  const BagItemID = useSelector((store) => store.BagSlice);
  const FinalItems = Items.filter((item) => {
    const itemIndex = BagItemID.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page ">
        <div className="bag-items-container">
          {BagItemID.length ? (
            FinalItems.map((item) => <BagItem item={item} key={item.id} />)
          ) : (
            <div>
              <img
                src="images/empty-cart.png"
                alt=""
                height={"400px"}
                width={"400px"}
                style={{ marginLeft: "140px", marginTop: "10px" }}
              />
              <h5 style={{ marginLeft: "280px", marginTop: "20px" }}>
                CART IS EMPTY
              </h5>
            </div>
          )}
        </div>
        <BagSummary />
      </div>
    </main>
  );

  // return (
  //   <main>
  //     <div className="bag-page">
  //       <div className="bag-items-container">
  //         <BagItem item={item} />
  //       </div>
  //       <BagSummary />
  //     </div>
  //   </main>
  // );
};
export default Bag;
