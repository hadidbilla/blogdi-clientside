import React, { useState } from "react";
import { Row, Col, Affix, Drawer, Form, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignLanguage,
  faComment,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import Hadid from "../../Images/hb.jpg";
import Cover from "../../Images/cover.png";
import Comment from "../Comment/Comment";
import "./SinglePost.css";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };
const SinglePost = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Drawer
        title="Your Comment"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        Style={{
          width: "500px",
        }}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          //   validateMessages={validateMessages}
        >
          <Form.Item name={["user", "introduction"]} label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      <div className="post-title">
        <h1>JavaScript Timers: Everything you need to know</h1>
        <div className="post-parson-details">
          <div style={{ marginRight: "10px" }} className="parson-img">
            <img
              style={{ width: "48px", height: "48px", borderRadius: "50%" }}
              src={Hadid}
              alt=""
            />
          </div>
          <div className="post-time">
            <p style={{ marginBottom: "0px" }}>Hadid Billa</p>
            <small>Sep 18, 2018 · 10 min read</small>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }} className="post-discrp">
        <div className="post-img">
          <img src={Cover} alt="" />
        </div>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Affix offsetTop={70} onChange={(affixed) => console.log(affixed)}>
              <div style={{ marginTop: "20px" }}>
                <div style={{ marginLeft: "100px" }} className="side-data">
                  <h2>EadgeECoder</h2>
                  <p style={{ color: "#848585" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, sequi. Cum iusto error dolore, amet esse sit incidunt
                    debitis vel.
                  </p>
                  <button className="post-page-btn">Follow</button>
                  <hr style={{ marginTop: "20px" }} />
                  <div className="like-and-comt">
                    <div className="post-btn-group">
                      <button className="btn-like">
                        <FontAwesomeIcon
                          style={{ fontSize: "25px" }}
                          icon={faSignLanguage}
                        />
                      </button>
                      <span>1</span>
                    </div>
                    <div className="post-btn-group">
                      <button className="btn-like">
                        <FontAwesomeIcon
                          onClick={showDrawer}
                          style={{ fontSize: "25px" }}
                          icon={faComment}
                        />
                      </button>
                      <span>1</span>
                    </div>
                    <div className="post-btn-group">
                      <button className="btn-like">
                        <FontAwesomeIcon
                          style={{ fontSize: "25px" }}
                          icon={faBookmark}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Affix>
          </Col>
          <Col span={10}>
            <div className="post">
              <p style={{ marginTop: "20px", marginLeft: "50px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                non iste? Animi, at dolorum laborum nostrum ipsum sequi dolor
                quod dolore perferendis velit facilis, alias, eum explicabo
                assumenda! Fugiat explicabo iusto sint voluptatum soluta, iure
                incidunt sapiente adipisci recusandae alias voluptatibus nulla
                nam, accusamus provident at tenetur aliquam id impedit. Maxime
                illo ullam fuga impedit incidunt. Tempore, accusantium libero,
                voluptas tempora porro mollitia at temporibus quos amet
                assumenda qui facilis officiis illum similique accusamus dicta
                commodi nobis, necessitatibus atque voluptate asperiores quas
                minus saepe? Corporis, nesciunt culpa repellat, fuga quasi odit
                blanditiis consequuntur soluta facilis sapiente aut dicta, nam
                iusto eligendi delectus! Omnis vel maiores saepe consequatur
                eaque quis porro quod, ipsa illum aspernatur deserunt molestiae
                commodi delectus? Accusamus praesentium esse vitae eos aliquid?
                Esse fuga rerum laborum reiciendis ipsam voluptatem dignissimos
                praesentium hic officia atque iste delectus dolore laboriosam
                quis suscipit, assumenda vel maiores repellat? Ipsam quis vitae
                similique debitis numquam maxime, mollitia hic temporibus minima
                doloribus eius libero nobis ex, quam atque harum laborum illum
                voluptate, sit cum ab sed? Voluptates, aspernatur corrupti?
                Quisquam maxime vitae iste itaque fuga optio amet unde ea
                repellat molestias eaque alias quidem in, nam quasi ullam
                distinctio. Consectetur, similique. Quasi optio architecto
                pariatur ipsam, voluptatibus tenetur voluptates aliquid fugit
                minima error culpa, beatae incidunt in accusantium, soluta
                nesciunt quae eveniet! Culpa nesciunt perspiciatis officia
                deserunt eum vitae ducimus repudiandae odit ullam corporis at
                rerum tempore quibusdam, molestias saepe optio ratione quas!
                Iusto iste laudantium repudiandae ipsam id possimus placeat odit
                recusandae natus tenetur, ratione et quas eaque consequatur
                earum labore commodi eligendi. Iste magnam architecto, quod
                atque dignissimos consequuntur porro molestias praesentium
                aperiam earum repellendus nihil impedit beatae fuga voluptas
                veniam optio distinctio neque obcaecati. Corrupti repellat porro
                rem earum inventore animi labore amet, ullam dolor doloribus sed
                voluptatum distinctio laudantium tenetur eos vero sunt et
                temporibus cupiditate nemo voluptatem, iusto id sequi.
                Doloremque, perferendis impedit modi unde explicabo illum
                officiis voluptatum? Perspiciatis voluptatibus, facere veniam
                nobis quod officia, molestiae temporibus, necessitatibus quos
                ratione minus expedita! Eos facere sapiente laboriosam fugit
                aperiam, earum perspiciatis accusamus officia reprehenderit eum
                vel amet repellendus ea laborum aspernatur? Quibusdam beatae
                cum, sint ducimus quis fuga voluptatem repudiandae nihil
                nesciunt accusamus recusandae atque consectetur! Totam natus
                molestiae, soluta laudantium a ea dolorem commodi asperiores,
                eum laboriosam accusantium sed aliquid sint quod quae. Illo,
                necessitatibus beatae sed dolores ad maxime, ab repellendus
                suscipit dolorum est qui ullam iusto quasi ut nihil, possimus
                quae nulla doloribus eos vitae in adipisci minima. Commodi eos
                asperiores aut vel, suscipit totam maiores voluptas facere,
                natus officia quis aspernatur! Dicta cum non numquam nostrum
                incidunt omnis neque unde maiores. Eaque suscipit veniam alias
                soluta eligendi rerum itaque, quos fuga molestiae numquam, qui
                beatae unde pariatur atque natus ullam architecto, quas
                perspiciatis eius nemo placeat nulla illum? Omnis ducimus fugit
                corporis eos labore odit, itaque laudantium natus dolorum
                doloremque. Excepturi culpa itaque similique repudiandae
                eligendi voluptatibus, aspernatur impedit nostrum nesciunt a
                voluptates alias voluptatem, consectetur tempore corporis aut
                mollitia! Accusantium debitis voluptas voluptatem autem!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SinglePost;
