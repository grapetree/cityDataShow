import React from 'react'
import Topbar from '../components/Topbar'
import { Title } from '../components/Title'
import { Select, Radio } from 'antd'
import { barData } from '../data/barReact.js'
import { BarReact } from '../components/charts/barReact'
import { pieData } from '../data/pieReact.js'
import { PieReact } from '../components/charts/pieReact'
import { barCrossData } from '../data/barCross.js'
import { BarCross } from '../components/charts/barCross'
import { lineData } from '../data/data.js'
import { LineReact } from '../components/charts/LineReact'
import { CityMap } from '../components/charts/cityMap'

import '../less/liaocheng.less'
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const bgLeft = {
    backgroundSize: '100% 100%',
    background: `url(${require("../images/blockbg-left.png")}) no-repeat`,
}
const bgRight = {
    backgroundSize: '100% 100%',
    background: `url(${require("../images/blockbg-right.png")}) no-repeat`,
}
console.log(lineData())
export default class Liaocheng extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pieData: pieData(1),
            barCrossData: barCrossData(1),
            barData: barData(),
            lineData: lineData()
        }
    }
    handleChange2(){
        this.setState({lineData: lineData()})
    }
    handleChange3(key){
        if (key.target.value == 'a'){
            this.setState({ barCrossData: barCrossData(1) })
        }else{
            this.setState({ barCrossData: barCrossData(2) })
        }
    }
    handleChange4(){
        this.setState({barData: barData()})
    }
    handleChangeAll() {
        this.setState({
            pieData: pieData(1),
            barCrossData: barCrossData(1),
            barData: barData(),
            lineData: lineData()
        })
    }
    render() {        
        return (
            <div className="big-bg">
                <div className="center-map">
                    <CityMap />
                </div>              
                <div className="layer-left"></div>
                <div className="layer-right"></div>
                <div className="sel-warp sel-map">
                    <Select defaultValue="0" onChange={this.handleChangeAll.bind(this)}>
                        <Option value="0">2018</Option>
                        <Option value="1">2017</Option>
                    </Select>
                </div>
                <div id="dealchart1" style={bgLeft}>
                    <div className="chart-block">
                        <h2 className="chart-tit">各类农产品生产用地占比分析</h2>
                        <div className="sel-warp">
                            {/* <Select defaultValue="2018" onChange={handleChange}>
                                <Option value="2018">2018</Option>
                                <Option value="2017">2017</Option>
                                <Option value="2016">2016</Option>
                            </Select> */}
                        </div>
                        <div className="chart-show">
                            <PieReact data={this.state.pieData} />
                        </div>
                    </div>

                </div>
                <div id="dealchart2" style={bgRight}>
                    <div className="chart-block">
                        <h2 className="chart-tit">产量排行</h2>
                        <div className="sel-warp">
                            <RadioGroup defaultValue="a" size="small" onChange={this.handleChange3.bind(this)}>
                                <RadioButton value="a">种植</RadioButton>
                                <RadioButton value="b">养殖</RadioButton>
                            </RadioGroup>
                        </div>
                        <div className="chart-show">
                            <BarCross data={this.state.barCrossData} />
                        </div>
                    </div>
                </div>
                <div id="dealchart3" style={bgLeft}>
                    <div className="chart-block">
                        <h2 className="chart-tit">单产趋势</h2>
                        <div className="sel-warp">
                            <Select defaultValue="0" onChange={this.handleChange2.bind(this)}>
                                <Option value="0">不限</Option>
                                <Option value="1">鸭梨</Option>
                                <Option value="2">葡萄</Option>
                                <Option value="3">大枣</Option>
                                <Option value="4">大蒜</Option>
                            </Select>
                        </div>
                        <div className="chart-show">
                            <LineReact data={this.state.lineData} />
                        </div>
                    </div>
                </div>
                <div id="dealchart4" style={bgRight}>
                    <div className="chart-block">
                        <h2 className="chart-tit">产量与用地趋势</h2>
                        <div className="sel-warp">
                            <Select defaultValue="2" onChange={this.handleChange4.bind(this)}>
                                <Option value="0">不限</Option>
                                <Option value="1">鸭梨</Option>
                                <Option value="2">葡萄</Option>
                                <Option value="3">大枣</Option>
                                <Option value="4">大蒜</Option>
                                <Option value="5">西瓜</Option>
                                <Option value="6">辣椒</Option>
                            </Select>
                        </div>
                        <div className="chart-show">
                            <BarReact data={this.state.barData} /> 
                        </div>
                    </div>
                </div>         
            </div>
        )
    }       
}