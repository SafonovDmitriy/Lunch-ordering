import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NAVIGATION_MAP, ROLE_MAP } from "../../constants";
import { userRoleSelector } from "../../redux/selectors";

const NavigationMenuWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const NavLinkStyles = styled(NavLink)`
  color: black;
  &.active {
    font-weight: bold;
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

  const menuShow = userRole === ROLE_MAP.admin ? adminNavMenu : userNavMenu;

  return (
    <NavigationMenuWrapper>
      {menuShow.map((menuItem) => (
        <NavLinkStyles exact to={menuItem.link}>
          {menuItem.title}
        </NavLinkStyles>
      ))}
    </NavigationMenuWrapper>
  );
};
export default NavigationMenu;
