import React from "react";
import SideBar from "./SideBar/SideBar";
import BlogDi from "../../../Images/profile.png";
import { Link } from "react-router-dom";
import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faBell } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Popover } from "antd";
// import { Nav, Navbar } from "react-bootstrap";
const TopBar = () => {
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
    <div style={{ backgroundColor: "black" }} className="nav-font text-white">
      <ul className="list-unstyled d-flex align-items-center container">
        <li className="list-inline-item m-2">
          <Link to="/home">
            <img
              style={{ width: "100px", height: "50px" }}
              src={BlogDi}
              alt=""
            />
          </Link>
        </li>
        <div className="ml-auto d-flex  align-items-center">
          <li className="list-inline-item mb-2 d-none d-md-inline">
            <form id="search-field" className="d-inline mr-5">
              <input type="search" placeholder="Search" />
            </form>
          </li>
          <li className="list-inline-item mr-5 d-none d-md-inline">
            <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faBell} />
          </li>
          <li className="list-inline-item mr-5 d-none d-md-inline">
            <FontAwesomeIcon
              style={{ fontSize: "25px" }}
              className="top-icon"
              icon={faBookmark}
            />
          </li>
          <li className="list-inline-item mr-5 d-none d-md-inline">
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
                  style={{
                    background: "black",
                    border: "1px solid white",
                    marginBottom: "4px",
                  }}
                  size={32}
                  icon={<UserOutlined />}
                />
              </button>
            </Popover>
          </li>
          <li className="list-inline-item mr-3 pr-2 d-md-none d-block">
            <SideBar />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default TopBar;
