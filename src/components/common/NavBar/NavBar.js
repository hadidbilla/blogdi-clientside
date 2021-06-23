import React from "react";
import "./NavBar.css";
import BlogDi from "../../../Images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBookmark,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Hadid from "../../../Images/hb.jpg";
import { Popover } from "antd";
import { Link } from "react-router-dom";
const NavBar = () => {
  const text = (
    <Link to="/profile" style={{ color: "white", fontSize: "20px" }}>
      Hi, Hadid
    </Link>
  );
  const content = (
    <div style={{ color: "white" }} className="popHover">
      <Link
        style={{ fontSize: "17px", color: "white", paddingTop: "10px" }}
        to="/profile"
      >
        Profile
      </Link>
      <Link
        style={{
          fontSize: "17px",
          color: "white",
          display: "block",
          paddingTop: "10px",
        }}
        to="/contact"
      >
        Contact
      </Link>
      <Link
        style={{
          fontSize: "17px",
          color: "white",
          display: "block",
          paddingTop: "10px",
        }}
        to="/"
      >
        Help
      </Link>
      <Link
        style={{
          fontSize: "17px",
          color: "white",
          display: "block",
          paddingTop: "10px",
        }}
        to="/signin"
      >
        SignIn
      </Link>
    </div>
  );
  return (
    <header class="header">
      <h1 class="top-icon">
        <Link to="/home">
          <img style={{ width: "100px", height: "50px" }} src={BlogDi} alt="" />
        </Link>
      </h1>
      <ul class="main-nav">
        <li>
          <a href="#">
            <FontAwesomeIcon className="top-icon" icon={faSearch} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon className="top-icon" icon={faBookmark} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon className="top-icon" icon={faBell} />
          </a>
        </li>
        <li>
          {/* <img
            style={{
              height: "40px",
              width: "50px",
              borderRadius: "50%",
              marginTop: "5px",
            }}
            src={Hadid}
            alt=""
          /> */}
          <Popover
            overlayClassName={"customerCSS"}
            placement="bottom"
            title={text}
            content={content}
            trigger="hover"
            overlayStyle={{ borderColor: "black" }}
          >
            <button className="profile-btn">
              <Avatar
                style={{ background: "black" }}
                size={33}
                icon={<UserOutlined />}
              />
            </button>
          </Popover>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
