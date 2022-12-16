import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import Footer from "../../Components/Footer/footer.component";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link className="nav-logo-container" to="/">
          <h1>bad sunday</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
