import React from "react";
import { Row, Col } from "antd";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div style={{ marginTop: "20px" }} className="profile-header">
        <h1>Welcome, Hadid</h1>
        <hr />
      </div>
      <div className="profile-data">
        <Row gutter={[24, 16]}>
          <Col span={4}>
            <LeftSide />
          </Col>
          <Col span={20}>
            <RightSide />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
