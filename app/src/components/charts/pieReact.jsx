import React from 'react';
// import 'echarts/lib/chart/bar' //图表类型
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

//导入echarts
let echarts = require('echarts/lib/echarts'); //必须

export class PieReact extends React.Component {

    constructor(props) {
        super(props)
        this.setPieOption = this.setPieOption.bind(this)
        this.initPie = this.initPie.bind(this)
    }

    initPie() {
        const { data } = this.props //外部传入的data数据
        let name = [];
        data.dataLen.map((x) => {
            name.push(x.name);
        })
        let myChart = echarts.init(this.refs.pieReact) //初始化echarts
        //我们要定义一个setPieOption函数将data传入option里面
        let options = this.setPieOption(data, name)
        //设置options
        myChart.setOption(options)
    }

    setPieOption(data, name) {
        return {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                show: true,
                formatter: function (params) {
                    var html = '<div style="width:100px;"><p style="font-size:30px;font-weight:bold;margin-bottom:10px;text-align:center;width:65px;color:#fff600;">'
                        + params.percent
                        + '<span style="font-size: 14px;color: #bbbbbb;">%</span></p><p style="font-size:12px;text-align:center;color:#575757;">'
                        + '<span style="color:#00f9ff;font-size:14px;display:inline-block;text-align:center;">'
                        + params.name
                        + '</span>'
                        + '</p></div>';
                    return html;
                },
                position: function (point, params, dom, rect, size) {
                    //console.log(size.contentSize);
                    //console.log(size.viewSize);
                    // 固定在顶部
                    return [(size.viewSize[0] - size.contentSize[0]) / 2, (size.viewSize[1] - size.contentSize[1]) / 2];
                },
                backgroundColor: 'none',
                textStyle: {
                    fontSize: 15,
                    color: '#666'
                }
            },
            legend: {
                x: 'center',
                bottom: 10,
                data: name,
                textStyle: {
                    color: '#00f9ff'
                }
            },
            title: {
                x: 'center',
                textStyle: {
                    fontSize: 16,
                    fontWeight: "bolder",
                    color: "#666"
                }
            },
            color: ['#004e4c', '#006c66', '#00837b', '#858c0f', '#76cd3c', '#fd9233', '#ffd75c'],
            series: [
                {
                    z: 0,
                    name: '',
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: [62, 64],
                    hoverAnimation: false,
                    label: {
                        normal: {
                            position: 'center',
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false

                        }
                    },
                    data: [{
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: '#4ce3ff'
                            }
                        },
                        tooltip: { show: false }
                    }]
                },
                {
                    name: '',
                    type: 'pie',
                    radius: ['70', '100'],
                    center: ['50%', '50%'],
                    data: data.dataLen,
                    label: {
                        normal: {
                            position: 'outside',
                            show: false,
                            formatter: "{b}",
                            textStyle: {
                                fontSize: 16
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 20,
                            length2: 6,
                        }
                    }
                }
            ]
        }
    }

    componentDidMount() {
        this.initPie()
    }

    componentDidUpdate() {
        this.initPie()
    }

    render() {
        return (
            <div className="bar-react">
                <div ref="pieReact" style={{ width: "100%", height: "100%" }}></div>
            </div>
        )
    }
}