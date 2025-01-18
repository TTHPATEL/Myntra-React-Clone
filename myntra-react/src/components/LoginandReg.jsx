import { useRef } from "react";

const LoginandReg = () => {
  let mobilenumber = useRef();
  return (
    <center
      className="card w-100"
      style={{
        maxWidth: "400px",
        marginLeft: "550px",
        height: "500px",
        marginTop: "100px",
        marginBottom: "30px",
      }}
    >
      <div className="card-body">
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div className="text-center mb-3">
                <h5>
                  <b>Login</b> or <b>Singup</b>
                </h5>
              </div>

              <div
                data-mdb-input-init
                className="form-outline mb-4"
                style={{ marginTop: "50px" }}
              >
                <input
                  type="tel"
                  id="loginName"
                  className="form-control"
                  placeholder="+91 | Mobile Number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  ref={mobilenumber}
                />
                <p
                  className="text-start"
                  style={{ marginTop: "30px", fontSize: "12.5px" }}
                >
                  By continuing, I agree to the{" "}
                  <b style={{ color: "#FF3F6C" }}>Terms of Use</b> &{" "}
                  <b style={{ color: "#FF3F6C" }}>Privacy Policy</b>
                </p>
              </div>

              <button
                type="submit"
                className="btn-place-order"
                onClick={(e) => {
                  e.preventDefault();
                  if (mobilenumber.current.value.length >= 10) {
                    alert(
                      `OTP sent to this Mobile Number : ${mobilenumber.current.value}`
                    );
                    mobilenumber.current.value = "";
                  } else {
                    alert(`Enter correct Mobile Number`);
                  }
                }}
              >
                <div className="css-xjhrni">CONTINUE</div>
              </button>

              <div
                className="text-start"
                style={{ fontSize: "12.5px", marginTop: "35px" }}
              >
                <p>
                  Have trouble logging in?{" "}
                  <b style={{ color: "#FF3F6C" }}>Get help</b>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </center>
  );
};

export default LoginandReg;
