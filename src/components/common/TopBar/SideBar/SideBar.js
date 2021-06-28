import React, { useState } from "react";
import { Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
const SideBar = () => {
  const navData = [
    { title: "Trending Trips" },
    { title: "Backpacking Trips" },
    { title: "Himalayan Escapades" },
    { title: "Weekend Trips" },
    { title: "Workcations" },
    { title: "Blogs" },
  ];
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        style={{ fontSize: "25px", cursor: "pointer" }}
        onClick={showDrawer}
      />
      <Drawer
        // title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <FontAwesomeIcon
          style={{ fontSize: "25px", cursor: "pointer", color: "white" }}
          icon={faTimes}
          onClick={onClose}
        />
        <div className="mt-4">
          {navData.map((items) => (
            <h6
              style={{
                borderBottom: "1px solid white",
                paddingBottom: "9px",
                color: "white",
              }}
            >
              {items.title}
            </h6>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
