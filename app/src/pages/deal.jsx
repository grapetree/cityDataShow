import React from 'react'
import { lineData } from '../data/data.js';
import { LineReact } from '../components/charts/mapChart';
import { Select,Radio } from 'antd';
import { PieReact } from '../components/charts/pieReact';
import { pieData } from '../data/pieReact.js';
import { barCrossData } from '../data/barCross.js'
import { BarCross } from '../components/charts/barCross'
import { barData } from '../data/barReact.js'
import { BarReact } from '../components/charts/barReact'


import '../less/deal.less'

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


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: [],
            pie1data: pieData(),
            pie2data: pieData(),
            barCrossData: barCrossData(),
            barData: barData()
        }       
    }

    componentDidMount() {
        $.ajax({
            url:'getProfile'
        })
        .done(function(res) {
            let data = JSON.parse(res);
            // 需要绑定this
            this.setState({idx:data.idx})
        }.bind(this))
    }

    handleChange1(){
        this.setState({pie1data: pieData()})
    }
    handleChange2(){
        this.setState({pie2data: pieData()})
    }
    handleChange3(key){
        this.setState({barCrossData: barCrossData()})
    }
    handleChange4(key){
        console.log(key.target.value)
        this.setState({ barData: barData(key.target.value)})
    }
    handleChangeAll() {
        this.setState({ 
            barData: barData() ,
            barCrossData: barCrossData(),
            pie2data: pieData(),
            pie1data: pieData()
        })
    }
    render() {        
        return (
            <div className="content-warp">
                <div id="mapchart">
                    <LineReact data={lineData.line} /> 
                </div>
                <div className="layer-left"></div>
                <div className="layer-right"></div>
                <div className="sel-warp sel-map">
                    <Select defaultValue="0" onChange={this.handleChangeAll.bind(this)}>
                        <Option value="0">鸭梨</Option>
                        <Option value="1">葡萄</Option>
                        <Option value="2">大枣</Option>
                        <Option value="3">大蒜</Option>
                    </Select>
                </div>
                <div id="dealchart1" style={ bgLeft }>
                    <div className="chart-block">
                        <h2 className="chart-tit">2017年各地区销售量占比</h2>
                        <div className="sel-warp">
                            <Select defaultValue="2018" onChange={this.handleChange1.bind(this)}>
                                <Option value="2018">2018</Option>
                                <Option value="2017">2017</Option>
                                <Option value="2016">2016</Option>
                            </Select>
                        </div>
                        <div className="chart-show">
                            <PieReact data={this.state.pie1data} />
                        </div>
                    </div>
                    
                </div>
                <div id="dealchart2" style={ bgRight }>
                    <div className="chart-block">
                        <h2 className="chart-tit">各地市价格排行</h2>
                        <div className="sel-warp">
                            <RadioGroup defaultValue="a" size="small" onChange={this.handleChange3.bind(this)}>
                                <RadioButton value="a">年度</RadioButton>
                                <RadioButton value="b">季度</RadioButton>
                                <RadioButton value="c">月度</RadioButton>
                            </RadioGroup>
                        </div>
                        <div className="chart-show">
                            <BarCross data={this.state.barCrossData} />
                        </div>
                    </div>
                </div>
                <div id="dealchart3" style={ bgLeft }>
                    <div className="chart-block">
                        <h2 className="chart-tit">2017年各地区销售额占比</h2>
                        <div className="sel-warp">
                            <Select defaultValue="2018" onChange={this.handleChange2.bind(this)}>
                                <Option value="2018">2018</Option>
                                <Option value="2017">2017</Option>
                                <Option value="2016">2016</Option>
                            </Select>
                        </div>
                        <div className="chart-show">
                            <PieReact data={this.state.pie2data} />
                        </div>
                    </div>
                </div>
                <div id="dealchart4" style={ bgRight }>
                    <div className="chart-block">
                        <h2 className="chart-tit">农产品销量与价格趋势</h2>
                        <div className="sel-warp">
                            <RadioGroup defaultValue="0" size="small" onChange={this.handleChange4.bind(this)}>
                                <RadioButton value="0">年度</RadioButton>
                                <RadioButton value="1">季度</RadioButton>
                                <RadioButton value="2">月度</RadioButton>
                            </RadioGroup>
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