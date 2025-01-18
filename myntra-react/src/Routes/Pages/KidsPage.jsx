import HomeItem from "../../components/HomeItem";
import { useSelector } from "react-redux";
const KidsPage = () => {
  const item = useSelector((store) => store.items);
  const Newitem = item.filter((i) => {
    return i.category === "Kids";
  });
  return (
    <main>
      <div className="items-container">
        {Newitem.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default KidsPage;
