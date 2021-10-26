import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NAVIGATION_PATH, ROLE_MAP } from "../../constants";
import { userRoleSelector } from "../../redux/selectors";

const NavigationMenu = () => {
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
  const userRole = useSelector(userRoleSelector);
  const userNavMenu = [
    { link: NAVIGATION_PATH.HOME_PAGE, title: "Home" },
    { link: NAVIGATION_PATH.STATISTICS_PAGE, title: "Statistics" },
  ];
  const adminNavMenu = [
    ...userNavMenu,
    { link: NAVIGATION_PATH.ADMIN_PAGE, title: "Admin" },
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
