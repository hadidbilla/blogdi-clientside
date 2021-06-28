import React, { useState } from "react";
import { Row, Col } from "antd";
import "./TopHeader.css";
import { Link, useHistory } from "react-router-dom";
const TopHeader = () => {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/single-post/${id}`);
  };
  const [BreakingNews, setBreakingNews] = useState([
    {
      id: "1",
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
    {
      id: "2",
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
    {
      id: "3",
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
    {
      id: "4",
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
  ]);
  return (
    <div>
      <h6 className="breaking">
        <a href="">Top News</a>
      </h6>
      <Row gutter={[16, 16]}>
        {BreakingNews.map((news) => {
          return (
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
              <Link onClick={() => handleClick(news.id)}>
                <div className="top-news">
                  <small style={{ color: "#737373" }}>7 hours ago</small>
                  <h6>{news.title}</h6>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TopHeader;
