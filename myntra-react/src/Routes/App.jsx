import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItem from "../components/FetchItem";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
function App() {
  let fetchStatus = useSelector((store) => store.fetchStatusSlice);
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
