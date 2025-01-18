import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Routes/App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import Home from "./Routes/Home.jsx";
import { Provider } from "react-redux";
import MyntraStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MenPage from "./Routes/Pages/MenPage.jsx";
import WomenPage from "./Routes/Pages/WomenPage.jsx";
import BeautyPage from "./Routes/Pages/BeautyPage.jsx";
import KidsPage from "./Routes/Pages/KidsPage.jsx";
import LivingandHomePage from "./Routes/Pages/LivingandHomePage.jsx";
import StudioPage from "./Routes/Pages/StudioPage.jsx";
import WishList from "./components/WishList.jsx";
import LoginandReg from "./components/LoginandReg.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="bag" element={<Bag />}></Route>
      <Route path="men" element={<MenPage />}></Route>
      <Route path="women" element={<WomenPage />}></Route>
      <Route path="beauty" element={<BeautyPage />}></Route>
      <Route path="kids" element={<KidsPage />}></Route>
      <Route path="livingandhome" element={<LivingandHomePage />}></Route>
      <Route path="studio" element={<StudioPage />}></Route>
      <Route path="wishlist" element={<WishList />}></Route>
      <Route path="loginandreg" element={<LoginandReg />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
