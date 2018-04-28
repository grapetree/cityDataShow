import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

// 引入Antd组件
import { Menu } from 'antd';
import { width } from 'window-size';
const SubMenu = Menu.SubMenu;

const titImg = {
    // backgroundSize: '100% 100%',
    background: `url(${require("../images/titlebg.png")}) no-repeat`,
    backgroundPosition: 'center center',
}



export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current:document.cookie.split(";")[0].split("=")[1]
        }
    }    
    changeCookie = (v) => {
        document.cookie = "nowKey=" + v;
    }    
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if(e.key == "home"){
            hashHistory.push('/');
        }else if(e.key == 'list'){
            hashHistory.push('list');
        }else if(e.key == 'report'){
            hashHistory.push('report');
        } else if (e.key == 'liaocheng'){
            hashHistory.push('liaocheng');
        }else if(e.key == 'setting'){
            hashHistory.push('setting');
        }
    }
    componentDidMount() {
        var now = window.location.pathname.substring(1);
        now = now === '' ? 'home' : now;
        this.changeCookie(now);
        this.setState({ current: now });
    }
    render() {
        return (
            <div id="topMenu" style={ titImg }>
                <h1>农业精准生产经营服务</h1>            
                <Menu 
                    onClick={this.handleClick}
                    theme="light"
                    mode="horizontal"
                    selectedKeys={[this.state.current]}
                                 
                >
                    <Menu.Item key="home">成交分析</Menu.Item> 
                    <Menu.Item key="liaocheng">地区分析</Menu.Item>
                    <Menu.Item key="setting">用户分析</Menu.Item>                    
                </Menu>                 
            </div>                
        )
    }
}