import React from "react";
import "./Header.scss";

/**
 * @constructor <Header/>
 * @description 首页banner代码
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"/>
            </div>
        )
    }
}

export default Header;