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
const NavBar = () => {
  const text = (
    <span style={{ background: "black", color: "white" }}>Title</span>
  );
  const content = (
    <div className="popHover">
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <header class="header">
      <h1 class="top-icon">
        <a href="#">
          <img style={{ width: "100px", height: "50px" }} src={BlogDi} alt="" />
        </a>
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
