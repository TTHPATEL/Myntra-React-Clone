import { useSelector } from "react-redux";
import HomeItem from "../../components/HomeItem";
const MenPage = () => {
  let items = useSelector((store) => store.items);

  let FinalItem = items.filter((i) => {
    let newdata = i.category == "Men";
    return newdata;
  });

  return (
    <main>
      <div className="items-container">
        {FinalItem.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default MenPage;
