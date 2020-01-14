import React from "react";
import { connect } from "react-redux";
import { changeTab } from "../actions/tabActions.js";

import './BottomBar.scss';

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */
class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }
  changeTab(item) {
    this.props.dispatch(changeTab({
      activeKey: item.key
    }));
  }

  renderItem() {
    let tabs = this.props.tabs;

    return tabs.map((item, index) => {
      let cls = item.key + ' btn-item';
      let name = item.name;
      let activeKey = this.props.activeKey;
      if (item.key == activeKey) {
        cls += ' active';
      }
      return (
        <div key={index} className={cls} onClick={() => this.changeTab(item)}>
          <div className="tab-icon"></div>
          <div className="btn-name">{name}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="bottom-bar">
        { this.renderItem() }
      </div>
    )
  }
}

export default connect(
  state => ({
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey
  })
)(BottomBar);
