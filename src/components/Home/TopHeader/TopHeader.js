import React from "react";
import { Row, Col } from "antd";
import { useState } from "react/cjs/react.development";
import "./TopHeader.css";

const TopHeader = () => {
  const [BreakingNews, setBreakingNews] = useState([
    {
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
    {
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
    {
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
    {
      title:
        "Basketball Star James Harden Is The Newest Member Of The Saks Board",
    },
  ]);
  console.log(BreakingNews);
  return (
    <div>
      <h4 className="breaking">
        <a href="">Top News</a>
      </h4>
      <Row gutter={[16]}>
        {BreakingNews.map((news) => {
          return (
            <Col span={(6, 6)}>
              <div className="top-news">
                <small style={{ color: "#737373" }}>7 hours ago</small>
                <h4>{news.title}</h4>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TopHeader;
