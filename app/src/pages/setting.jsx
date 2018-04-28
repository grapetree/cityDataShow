import React from 'react'
import { Select } from 'antd';
import { WordReact } from '../components/charts/WordReact'
import { pieData } from '../data/pieReact.js'
import { PieReact } from '../components/charts/pieReact'
import { barCrossData } from '../data/barCross.js'
import { BarCross } from '../components/charts/barCross'
import { PercentPerson } from '../components/charts/percentPerson'

import '../less/analyze.less'

const bgLeft = {
    background: `url(${require("../images/blockbg-left.png")}) no-repeat`,
    backgroundPosition: '-35px 0'
}
const bg3 = {
    backgroundSize: '100% 100%',
    background: `url(${require("../images/blockbg-3.png")}) no-repeat`,
}
const bg2 = {
    background: `url(${require("../images/sexbg.png")}) no-repeat`,
    backgroundPosition: '-53px 0'
}
const Option = Select.Option;

const wcData1 = [{
    name: '冠县',
    value: 10000,
    textStyle: {
        normal: {
            color: '#fff',
        },
        emphasis: {
            color: 'red'
        }
    }
}, {
    name: '水分足',
    value: 6181
}, {
    name: '口感好',
    value: 4386
}, {
    name: '保湿',
    value: 4055
}, {
    name: '脆',
    value: 2467
}, {
    name: '新鲜',
    value: 2244
}, {
    name: '酸甜',
    value: 1898
}, {
    name: '个体大',
    value: 1484
}, {
    name: '脆',
    value: 1112
}, {
    name: '价格便宜',
    value: 965
}, {
    name: '核小',
    value: 847
}, {
    name: '无籽',
    value: 582
}, {
    name: '酸甜',
    value: 555
}, {
    name: '好吃',
    value: 550
}, {
    name: '价格便宜',
    value: 462
}, {
    name: '酸甜',
    value: 366
}, {
    name: '好吃',
    value: 360
}, {
    name: '便宜',
    value: 282
}, {
    name: '口感好',
    value: 273
}, {
    name: '实惠',
    value: 265
}];

const wcData2 = [{
    name: '吃水果',
    value: 10000,
    textStyle: {
        normal: {
            color: '#fff',
        },
        emphasis: {
            color: 'red'
        }
    }
}, {
    name: '喝饮料',
    value: 6181
}, {
    name: '电视剧',
    value: 4386
}, {
    name: '王者荣耀',
    value: 4055
}, {
    name: '网购',
    value: 2467
}, {
    name: '爱干净',
    value: 2244
}, {
    name: '论坛',
    value: 1898
}, {
    name: '旅游',
    value: 1484
}, {
    name: '古典音乐',
    value: 1112
}, {
    name: '玩游戏',
    value: 965
}, {
    name: '电视剧',
    value: 847
}, {
    name: '逛超市',
    value: 582
}, {
    name: '网购',
    value: 555
}, {
    name: '旅游',
    value: 550
}, {
    name: '喝饮料',
    value: 462
}, {
    name: '论坛',
    value: 366
}, {
    name: '逛超市',
    value: 360
}, {
    name: '买衣服',
    value: 282
}, {
    name: '网购',
    value: 273
}, {
    name: '旅游',
    value: 265
}];
let random = () => Math.random() * 1000
export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percentData:  {
                man: random(),
                women: random()
            },
            pieData: pieData(2),
            barCrossData: barCrossData(),
        }
    }

    handleChange3(){
        this.setState({barCrossData: barCrossData()})
    }
    handleChangeAll() {
        this.setState({
            pieData: pieData(2),
            barCrossData: barCrossData(),
            percentData: {
                man: random(),
                women: random()
            }
        })
    }
    render() {
        return (
            <div id="analyzePage">
                <div className="sle-block sel-warp">
                    <Select defaultValue="鸭梨" onChange={this.handleChangeAll.bind(this)}>
                        <Option value="鸭梨">鸭梨</Option>
                        <Option value="葡萄">葡萄</Option>
                        <Option value="大枣">大枣</Option>
                        <Option value="大蒜">大蒜</Option>
                    </Select>
                    <Select defaultValue="2018" onChange={this.handleChangeAll.bind(this)}>
                        <Option value="2018">2018</Option>
                        <Option value="2017">2017</Option>
                    </Select>
                </div>
                <div className="block-p">
                    <div className="chartb-one" style={bgLeft}>
                        <h2 className="chart-tit">客户地域销售额排行</h2>
                        <div className="sel-warp">
                            <BarCross data={this.state.barCrossData} />
                        </div>
                    </div>
                    <div className="chartb-two" style={bg2}>
                        <h2 className="chart-tit">客户性别占比</h2>
                        <div className="sel-warp">
                            <PercentPerson data={this.state.percentData}/>
                        </div>
                    </div>
                    <div className="chartb-one" style={bgLeft}>
                        <h2 className="chart-tit">客户年龄占比</h2>
                        <div className="sel-warp">
                            <PieReact data={this.state.pieData} />
                        </div>
                    </div>
                </div>
                <div className="block-p">
                    <div className="chartb-three" style={bg3}>
                        <h2 className="chart-tit">用户评价</h2>
                        <div className="cloudchart">
                            <WordReact data={wcData1} />
                        </div>
                    </div>
                    <div className="chartb-three" style={bg3}>
                        <h2 className="chart-tit">客户偏好</h2>
                        <div className="cloudchart">
                            <WordReact data={wcData2} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}