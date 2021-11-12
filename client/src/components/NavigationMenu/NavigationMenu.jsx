import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NAVIGATION_MAP, USER_ROLE_MAP } from "../../constants";
import { userRoleSelector } from "../../redux/selectors";

const NavigationMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const NavLinkStyles = styled(NavLink)`
  padding: 6px;
  color: #7a8a88;
  border-radius: 10px;
  padding: 5px;
  transition: all 0.1s;
  border-radius: 10px;

  &.active {
    border: solid #afafaf 1px;
    // padding: 4px;
    color: #48925f;
    box-shadow: 2px 1px 3px 0px #9a9a9a;
  }
  &:hover {
    border: solid #afafaf 1px;
    // padding: 4px;
    background-color: #dcdcdc;
    color: #2b2b2b;
  }
`;

const NavigationMenu = () => {
  const userRole = useSelector(userRoleSelector);
  const userNavMenu = [
    { link: NAVIGATION_MAP.HOME_PAGE, title: "Home" },
    { link: NAVIGATION_MAP.STATISTICS_PAGE, title: "Statistics" },
  ];
  const adminNavMenu = [
    ...userNavMenu,
    { link: NAVIGATION_MAP.ADMIN_PAGE, title: "Admin" },
  ];

  const menuShow =
    userRole === USER_ROLE_MAP.ADMIN ? adminNavMenu : userNavMenu;

  return (
    <NavigationMenuWrapper>
      {menuShow.map((menuItem) => (
        <NavLinkStyles exact to={menuItem.link} key={menuItem.link}>
          {menuItem.title}
        </NavLinkStyles>
      ))}
    </NavigationMenuWrapper>
  );
};
export default NavigationMenu;
