import React from 'react';
import 'echarts/lib/chart/bar' //图表类型
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

//导入echarts
let echarts = require('echarts/lib/echarts'); //必须
export class BarCross extends React.Component {

    constructor(props) {
        super(props)
        // console.log(barData)
        this.state = { barData: props.data.barData } 
        this.setBarCrossOption = this.setBarCrossOption.bind(this)
        this.initBarCross = this.initBarCross.bind(this)
        this.maxValue = this.maxValue.bind(this)
    }

    initBarCross() {
        const { data } = this.props //外部传入的data数据
        let myChart = echarts.init(this.refs.barCrossReact) //初始化echarts
        //我们要定义一个setBarCrossOption函数将data传入option里面
        let options = this.setBarCrossOption(data)
        //设置options
        myChart.setOption(options)
    }

    maxValue(){
        let barData = this.state.barData
        barData.sort((x, y) => { return x - y })
        // console.log(barData)
        let newData = [];
        for (let val of barData){
            newData.push(parseInt(barData[barData.length-1]*3/2))
		};
        return newData;
    }

    setBarCrossOption(data) {
        return {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: ''
                }
            },
            legend: {
                show: false,
                data: ['2011年', '2012年']
            },
            grid: {
                left: -30,
                right: 0,
                bottom: '2%',
                top:'5%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLine: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: [{
                type: 'category',
                axisLine: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(0,249,255,1)",
                        fontWeight: 'bold',
                        fontSize: 15,
                        align:'left'
                    },
                    margin:90,
                    formatter: function (value, index) {
                        //console.log(value)
                        return (data.barData.length - index) + '.\r\r' + value;
                    }
                },
                data: data.yAxisData
            }],
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    barWidth: 10,
                    barCategoryGap: '45%',
                    zlevel: 1,
                    itemStyle: {
                        borderWidth: 6,
                        borderColor: 'rgba(0,255,250,0)',
                        normal: {
                            color: function (params) {
                                // build a color map as your need.
                                var colorList = [
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#006b6c'
                                    },
                                    {
                                        offset: 1,
                                        color: '#006f70'
                                    }]),
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#009497'
                                    },
                                    {
                                        offset: 1,
                                        color: '#009497'
                                    }]),
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#00f9ff'
                                    },
                                    {
                                        offset: 1,
                                        color: '#00f9ff'
                                    }]),
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#35d509'
                                    },
                                    {
                                        offset: 1,
                                        color: '#35d509'
                                    }]),
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#9ad509'
                                    },
                                    {
                                        offset: 1,
                                        color: '#9ad509'
                                    }]),
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#ccca0a'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ccca0a'
                                    }])
                                ];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        normal: {
                            position: 'right',
                            show: true,
                            color: '#',
                            fontSize: 14,
                            formatter: function (value) {
                                return value.data;
                            }
                        }
                    },
                    data: data.barData
                },
                {
                    name: '2012年',
                    type: 'bar',
                    barWidth: 15,
                    barGap: '-125%',
                    barCategoryGap: '45%',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#007978',
                            color: 'rgba(0,255,250,0)'
                        }
                    },
                    data: this.maxValue()
                }
            ]
        }
    }

    componentDidMount() {
        this.initBarCross()
    }

    componentDidUpdate() {
        this.initBarCross()
    }

    render() {
        return (
            <div className="bar-react">
                <div ref="barCrossReact" style={{ width: "100%", height: "100%" }}></div>
            </div>
        )
    }
}