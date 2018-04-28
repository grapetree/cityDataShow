import React from 'react';
import 'echarts/lib/chart/line' //图表类型
import 'echarts/lib/component/tooltip' 
import 'echarts/lib/component/legend' 

//导入echarts
let echarts = require('echarts/lib/echarts'); //必须

export class LineReact extends React.Component {

	constructor(props) {
	    super(props)
	    this.setLineOption = this.setLineOption.bind(this)
	    this.initLine = this.initLine.bind(this)
	}

	initLine() {
		const { data } = this.props //外部传入的data数据
		let myChart = echarts.init(this.refs.lineReact) //初始化echarts
		//我们要定义一个setLineOption函数将data传入option里面
		let options = this.setLineOption(data)
		//设置options
		myChart.setOption(options)
	}

	setLineOption(data) {
	  	return {	
				title: {
					text: '',
					subtext: ''
				},
				backgroundColor: 'transparent',
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color: '#ccc'
						}
					},
					formatter: '{c}' + '\r\r吨/公顷'
				},
				legend: {
					show: false,
					data: ['']
				},

				grid: {
					left: '5%',
					right: '6%',
					bottom: '5%',
					top: '16%',
					containLabel: true
				},
				toolbox: {
					show: false,
				},
				xAxis: {
					type: 'category',
					show: true,
					axisLine: {
						show: true,
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					axisTick: {
						show: false,
						inside: true,

					},
					axisLabel: {
						textStyle: {
							color: "#00f9ff",
							fontSize: 12
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['rgba(0,249,255,.1)'],
							type: 'solid',
						}
					},
					boundaryGap: false,
					data: data.xAxisData
				},
				yAxis: {
					name: '产量：吨/公顷',
					nameTextStyle: {
						color: '#00f9ff'
					},
					type: 'value',
					axisLine: {
						show: true,
						lineStyle: {
							color: '#00f9ff'
						}
					},
					axisTick: {
						show: false,
						inside: true
					},
					axisLabel: {
						show: true,
						interval: 2,
						formatter: '{value}',
						textStyle: {
							color: "#00f9ff",
							fontSize: 12
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['rgba(0,249,255,.1)'],
							type: 'solid',
						}
					}
				},
				series: [
					{
						name: '',
						itemStyle: {
							normal: {
								color: '#ffd700',
								borderWidth: '3',
							},
						},
						symbol: 'emptyCircle',
						symbolSize: 6,
						showSymbol: false,
						type: 'line',
						data: data.seriesData
					}
				]
		}
	}

	componentDidMount() {
	    this.initLine()
	}

	componentDidUpdate() {
	    this.initLine()
	}
    
    render() {
        return (
            <div className="line-react">
                <div ref="lineReact" style={{width: "100%", height: "100%"}}></div>
            </div>
        )
    }
}