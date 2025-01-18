import { IoPersonSharp } from "react-icons/io5";
import { FaFaceSmile } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const bag = useSelector((store) => store.BagSlice);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/men">Mensss</Link>
          <Link to="/women">Women</Link>
          <Link to="kids">Kids</Link>
          <Link to="livingandhome">Home & Living</Link>
          <Link to="beauty">Beauty</Link>
          <Link to="studio">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <IoIosSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <NavLink
            to="/loginandreg"
            className={({ isActive }) =>
              `action_container ${
                isActive ? "text-orange-700" : "text-black-700"
              }`
            }
          >
            <div className="action_container">
              <IoPersonSharp />
              <span className="action_name">Profile</span>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `action_container ${
                isActive ? "text-orange-700" : "text-black-700"
              }`
            }
            to="/wishlist"
          >
            <div className="action_container">
              <FaFaceSmile />

              <span className="action_name">Wishlist</span>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `action_container ${
                isActive ? "text-orange-700" : "text-black-700"
              }`
            }
            to="/bag"
          >
            <IoBag />

            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </NavLink>
        </div>
      </header>
    </>
  );
};
export default Header;
