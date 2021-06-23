import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Jeo from "../../../Images/jeo.jpg";
import Tower from "../../../Images/twintower.jpg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Row gutter={[20]}>
        <Col span={16}>
          <div className="left-part">
            <div className="left-insideContent">
              <Link to="/single-post">
                <img style={{ width: "730px" }} src={Jeo} alt="" />
              </Link>

              <Link to="/single-post">
                <h1 style={{ textAlign: "center" }}>
                  G-7 Countries Agree To Infrastructure Project Rivaling China’s
                  ‘Belt And Road’
                </h1>
              </Link>
              <div style={{ textAlign: "center" }}>
                <small>
                  By <span style={{ fontWeight: "bold" }}>Graison Dangor</span>{" "}
                  Forbes Staff
                </small>
              </div>
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  color: "#333333",
                  fontWeight: "500",
                }}
              >
                Leaders of the Group of Seven countries will undertake a
                U.S.-led infrastructure project for developing nations to rival
                China’s Belt and Road Initiative.
              </h3>
            </div>
          </div>
          <div className="bottom">
            <Row gutter={[24, 16]}>
              <Col span={12}>
                <div className="bottom-content">
                  <img
                    style={{ height: "200px", width: "350px" }}
                    src={Tower}
                    alt=""
                  />
                  <h2>Full List: Malaysia’s Richest 2021</h2>
                  <p>
                    The nation’s richest saw their combined wealth rise 14% to
                    nearly $90 billion.
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div className="bottom-content">
                  <img
                    style={{ height: "200px", width: "350px" }}
                    src={Tower}
                    alt=""
                  />
                  <h2>Full List: Malaysia’s Richest 2021</h2>
                  <p>
                    The nation’s richest saw their combined wealth rise 14% to
                    nearly $90 billion.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <div className="right-part">
            <h4 className="trends-text">Trending</h4>
            <div className="right-content">
              <h3>
                SoftBank-Backed Coupang, The Amazon Of South Korea, Expands Into
                Japan
              </h3>
            </div>
            <div className="right-content">
              <h3>
                SoftBank-Backed Coupang, The Amazon Of South Korea, Expands Into
                Japan
              </h3>
            </div>
            <div className="right-content">
              <h3>
                SoftBank-Backed Coupang, The Amazon Of South Korea, Expands Into
                Japan
              </h3>
            </div>
            <div className="right-content">
              <h3>
                SoftBank-Backed Coupang, The Amazon Of South Korea, Expands Into
                Japan
              </h3>
            </div>
            <div className="right-content">
              <h3>
                SoftBank-Backed Coupang, The Amazon Of South Korea, Expands Into
                Japan
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
