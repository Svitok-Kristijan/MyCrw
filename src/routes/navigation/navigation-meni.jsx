import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import "./navigation.style.scss";
import {UserContext} from "../../context/user.context";
import {CardContext} from "../../context/card.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {isCardOpen} = useContext(CardContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="links-container">
          <Link className="link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="Logout" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="login" to="/login">
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
        {isCardOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
