import React from 'react';
import 'echarts/lib/chart/bar' //图表类型
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import mapjson from './371500.json'

//导入echarts
let echarts = require('echarts/lib/echarts'); //必须

export class CityMap extends React.Component {

    constructor(props) {
        super(props)
        this.setBarOption = this.setBarOption.bind(this)
        this.initBar = this.initBar.bind(this)
    }

    initBar() {
        const { data } = this.props //外部传入的data数据
        let myChart = echarts.init(this.refs.cityMap) //初始化echarts
        //我们要定义一个setBarOption函数将data传入option里面
        let options = this.setBarOption(data)
        //设置options
        echarts.registerMap('聊城', mapjson)
        myChart.setOption(options)
    }

    setBarOption(data) {
        return {
            tooltip: {
                trigger: 'item',
                formatter:function (params) {
                    console.log(params)
                    let html = '<div style="padding:5px;"><span>' + params.data.adress+'</span><br/><span>' 
                             + params.data.name2+':\r\r</sapn><span>'
                             +params.data.value[2]+'万吨</span></div>'
                    return html;
                }
            },
            geo: {
		        map: '聊城',
                top:70,
                zoom: 1.2,
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        // roam: true,
		        itemStyle: {
		            normal: {
		                areaColor: 'rgba(0,0,0,0)',
		                borderColor: '#a2d6f3'
		            },
		            emphasis: {
                        areaColor: 'rgba(0,0,0,0)',
		                borderColor: '#a2d6f3'
		            }
		        }
		    },
	        series: [{
        	name: '已知晓',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
            	{name:'东阿县',adress:'东阿县鸭梨种植园',value:[116.047345, 36.1938430000001,200],name2:'鸭梨'},
                { name: '东阿县2', adress: '东阿县葡萄种植园',value: [116.527345, 36.413843, 200], name2: '葡萄'}
            ],
            symbol: 'pin',
            symbolSize: 30,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff0'
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },{
                type: 'map',
                map: '聊城',
                zoom: 1.2,
                // roam: true,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize:20,
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return ''
                        }
                    },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'linear',
                            x: 0.5,
                            y: 0.5,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, .1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            }]
        }
    }

    componentDidMount() {
        this.initBar()
    }

    componentDidUpdate() {
        this.initBar()
    }

    render() {
        return (
            <div className="city-map">
                <div ref="cityMap" style={{ width: "100%", height: "100%" }}></div>
            </div>
        )
    }
}