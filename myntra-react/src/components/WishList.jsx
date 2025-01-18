import { Link } from "react-router-dom";
const WishList = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h5 style={{ fontWeight: "bold", marginTop: "90px" }}>PLEASE LOG IN</h5>

      <p style={{ fontSize: "17px", color: "gray", marginTop: "20px" }}>
        Login to view in your wishlist
      </p>
      <img src="images/wishlist.png" alt="" height={"300px"} width={"300px"} />
      <br />
      <Link to="/loginandreg">
        <button
          type="button"
          class="btn btn-outline-danger"
          style={{
            marginTop: "35px",
            height: "52px",
            width: "150px",
            fontWeight: "bold",
            marginBottom: "95px",
          }}
        >
          LOGIN
        </button>
      </Link>
    </div>
  );
};

export default WishList;
