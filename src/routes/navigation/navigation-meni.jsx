import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import {UserContext} from "../../context/user.context";
import {CardContext} from "../../context/card.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {isCardOpen} = useContext(CardContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/login">SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {isCardOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
