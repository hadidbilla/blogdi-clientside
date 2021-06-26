import React from "react";
import { Tabs } from "antd";
import { StickyContainer, Sticky } from "react-sticky";
import Tab1 from "./Tab1/Tab1";
import "./RightSide.css";
import Post from "../../Post/Post";
const { TabPane } = Tabs;
const RightSide = () => {
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          className="site-custom-tab-bar"
          style={{ ...style }}
        />
      )}
    </Sticky>
  );
  return (
    <div>
      <StickyContainer>
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane tab="Profile" key="1" style={{ height: 200 }}>
            <Tab1 />
          </TabPane>
          <TabPane tab="Post" key="2">
            <Post />
          </TabPane>
        </Tabs>
      </StickyContainer>
    </div>
  );
};

export default RightSide;
