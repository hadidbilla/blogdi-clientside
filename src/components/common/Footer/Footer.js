import React from "react";
import "./Footer.css";
import { Divider, Row, Col } from "antd";
import "antd/dist/antd.css";
import { createFromIconfontCN } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import instagramOutlined from "@iconify-icons/ant-design/instagram-outlined";

function Footer() {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  return (
    <div className="main-footer">
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 6 }}
          style={{ padding: "10px 20px" }}
        >
          <h2 style={{ marginLeft: "0px" }} className="footer-header">
            Blogdi
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit officiis
            corporis optio natus.
          </p>
        </Col>
        {/* Column2 */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          lg={{ span: 6 }}
          style={{ padding: "10px 20px" }}
        >
          <h2 style={{ marginLeft: "0px" }} className="footer-header">
            Shop
          </h2>
          <ui className="p">
            <li>
              <a href="#">Sell Online</a>
            </li>
            <li>
              <a href="#">Fetures</a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
            <li>
              <a href="#">Website Editors</a>
            </li>
            <li>
              <a href="#">Online Retail</a>
            </li>
          </ui>
        </Col>
        {/* Column2 */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          lg={{ span: 6 }}
          style={{ padding: "10px 20px" }}
        >
          <h2 style={{ marginLeft: "0px" }} className="footer-header">
            Press
          </h2>
          <ui className="p">
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Awards</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Online Retail</a>
            </li>
          </ui>
        </Col>
        {/* Column3 */}
        <Col span={6} style={{ padding: "10px 20px" }}>
          <h2 style={{ marginLeft: "0px" }} className="footer-header">
            About{" "}
          </h2>
          <ui className="p">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ui>
        </Col>
      </Row>
      <Divider dashed style={{ color: "#fff" }} />

      <Row wrap={false}>
        <Col flex="1 1 100px">
          <div style={{ padding: "0 120px" }}>
            <ui className="r">
              <li>
                <a className="social-icon" href="">
                  <IconFont
                    style={{ fontSize: "25px", marginTop: "4px" }}
                    type="icon-facebook"
                  />
                </a>
              </li>
              <li>
                <a className="social-icon" href="">
                  <IconFont
                    style={{ fontSize: "25px", marginTop: "4px" }}
                    type="icon-twitter"
                  />
                </a>
              </li>
              <li>
                <a className="social-icon" href="">
                  <Icon style={{ fontSize: "32px" }} icon={instagramOutlined} />
                </a>
              </li>
            </ui>
          </div>
          <Col flex="0 1 300px">
            <div style={{ padding: "0 10px" }}>
              <ui className="q">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Code of Conduct</a>
                </li>
              </ui>
            </div>
          </Col>
        </Col>
      </Row>
      <div />
      <Row>
        <Col span={24}>
          <p style={{ textAlign: "center" }} className="col-sm">
            &copy;{new Date().getFullYear()} Blogdi | All rights reserved
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
