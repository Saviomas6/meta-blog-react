import { useEffect, useState } from "react";
import * as Styled from "./style";
import logo from "../../assets/logo.svg";
import Button from "../button/Button";
import { Container, StyledLink } from "../../styles/sharedStyle";
import { Paths } from "../../routes/path";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleButton from "../toggleButton/ToggleButton";
import { useAppSelector } from "../../logic/redux/store/hooks";
import {
  setLoggedDetail,
  setLoggedIn,
  themeToggle,
} from "../../logic/redux/action/action";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const theme = useAppSelector((state) => state.userReducer.themeValue);
  const navTabData = [
    {
      id: 1,
      name: "HOME",
      link: Paths.home,
    },
    {
      id: 1,
      name: "ALL BLOGS",
      link: Paths.allBlog,
    },
    {
      id: 1,
      name: "CREATE",
      link: Paths.createBlog,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    dispatch(setLoggedDetail([]));
    setIsDropDown(false);
    navigate(Paths.home);
  };

  const toggleTheme = () => {
    dispatch(themeToggle(theme === "light" ? "dark" : "light"));
    if (typeof window !== undefined) {
      window.localStorage.setItem(
        "theme",
        theme === "light" ? "dark" : "light"
      );
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        dispatch(themeToggle(savedTheme));
      }
    }
  }, []);
  console.log("theme", theme);

  return (
    <Styled.NavbarLayout>
      <Container>
        <Styled.NavbarMainContainer>
          <StyledLink to={Paths.home}>
            <Styled.NavbarLogoContainer>
              <Styled.NavbarLogoImageContainer>
                <img src={logo} alt="logo" />
              </Styled.NavbarLogoImageContainer>
              <Styled.NavbarLogoText>METABLOG</Styled.NavbarLogoText>
            </Styled.NavbarLogoContainer>
          </StyledLink>
          <Styled.NavTabs>
            {navTabData.map((tab) => (
              <StyledLink to={tab.link} key={tab.id}>
                <Styled.NavTab pathname={location?.pathname === tab.link}>
                  {tab.name}
                </Styled.NavTab>
              </StyledLink>
            ))}
          </Styled.NavTabs>
          {isLoggedIn ? (
            <Styled.ProfileImageMainContainer>
              <ToggleButton
                label="create"
                isChecked={theme === "dark"}
                handleChecked={toggleTheme}
              />
              <Styled.ProfileImageContainer
                onClick={() => setIsDropDown(!isDropDown)}>
                <Styled.ProfileImage
                  src="https://images.pexels.com/photos/17575119/pexels-photo-17575119/free-photo-of-fashion-people-woman-animal.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="profile"
                />
              </Styled.ProfileImageContainer>
              {isDropDown && (
                <Styled.NavDropDownContainer>
                  <Styled.NavDropDown
                    onClick={() => {
                      navigate(Paths.profile);
                      setIsDropDown(false);
                    }}>
                    PROFILE
                  </Styled.NavDropDown>
                  <Styled.NavDropDown onClick={handleLogout}>
                    LOGOUT
                  </Styled.NavDropDown>
                </Styled.NavDropDownContainer>
              )}
            </Styled.ProfileImageMainContainer>
          ) : (
            <Styled.NavbarButtonWrapper>
              <ToggleButton
                label="create"
                isChecked={theme === "dark"}
                handleChecked={toggleTheme}
              />
              <Button
                text="SIGN IN"
                onClick={() => {
                  navigate(Paths.signIn);
                }}
                border="none"
                bgColor="#4b6bfb"
              />
              <Button
                text="REGISTER"
                onClick={() => {
                  navigate(Paths.register);
                }}
                border="none"
                bgColor="#4b6bfb"
              />
            </Styled.NavbarButtonWrapper>
          )}
        </Styled.NavbarMainContainer>
      </Container>
    </Styled.NavbarLayout>
  );
};

export default Navbar;
