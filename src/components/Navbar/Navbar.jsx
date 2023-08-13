import React, { useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { setNavHeight } from "../../Redux/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../Redux/weatherSlice";

export default function NavBar() {
  let nav = useRef();
  let navColor = useRef();
  let dispatch = useDispatch();
  let { lang } = useSelector((state) => state.weather);

  let Links = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "contact",
      to: "contact",
    },
  ];

  let resizeNav = () => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth <= 768) {
        navColor.current.style.backgroundColor = "rgba(42, 42, 121,0.8)";
      } else {
        navColor.current.style.backgroundColor = "transparent";
      }
    });
    window.addEventListener("scroll", (e) => {
      if (window.innerWidth > 768) {
        if (window.scrollY > nav?.current?.clientHeight) {
          navColor.current.style.backgroundColor = "rgba(42, 42, 121,0.8)";
        } else {
          navColor.current.style.backgroundColor = "transparent";
        }
      }
    });
    if (window.innerWidth <= 768) {
      navColor.current.style.backgroundColor = "rgba(42, 42, 121,0.8)";
    } else {
      navColor.current.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    dispatch(setNavHeight(nav?.current?.clientHeight));
    resizeNav();
  }, []);

  return (
    <>
      <Navbar ref={nav} fixed="top" collapseOnSelect expand="md" variant="dark">
        <Container
          ref={navColor}
          className={"rounded-5 px-5 py-2 " + styles.nav}
        >
          <NavLink className={"navbar-brand text-warning"} to={"/"}>
            <img src={logo} alt="Logo" className={`${styles.logo}`} />
            Lightning
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {Links?.map((ele, index) => (
                <NavLink key={index} className={"nav-link me-3"} to={ele.to}>
                  {ele.title.toUpperCase()}
                </NavLink>
              ))}
            </Nav>
            <NavDropdown
              title={
                <>
                  <span className={`fa-solid fa-globe `}></span>
                  <span className="ms-2">
                    {lang === "ar" ? "العربية" : "English"}
                  </span>
                </>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => {
                  dispatch(setLang("ar"));
                }}
              >
                العربية
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  dispatch(setLang("en"));
                }}
              >
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
