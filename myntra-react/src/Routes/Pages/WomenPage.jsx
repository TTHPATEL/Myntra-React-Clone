import { useSelector } from "react-redux";
import HomeItem from "../../components/HomeItem";

const WomenPage = () => {
  const item = useSelector((store) => store.items);
  console.log(item);

  const NewItem = item.filter((i) => {
    return i.category === "Women";
  });
  return (
    <main>
      <div className="items-container">
        {NewItem.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default WomenPage;
