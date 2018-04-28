import React from 'react';
import 'echarts/lib/chart/bar' //图表类型
import 'echarts/lib/component/tooltip' 
import 'echarts/lib/component/legend' 

//导入echarts
let echarts = require('echarts/lib/echarts'); //必须

export class BarReact extends React.Component {

	constructor(props) {
	    super(props)
		this.setBarOption = this.setBarOption.bind(this)
		this.initBar = this.initBar.bind(this)
	}

	initBar() {
		const { data } = this.props //外部传入的data数据
		let myChart = echarts.init(this.refs.barReact) //初始化echarts
		//我们要定义一个setBarOption函数将data传入option里面
		let options = this.setBarOption(data)
		//设置options
		myChart.setOption(options)
	}

	setBarOption(data) {
	  	return {	
				backgroundColor: 'transparent',
				legend: {
					show: false,
					right: '4%',
					textStyle: {
						color: '#333',
					},
					itemWidth: 20,
					itemHeight: 5,
					data: ['价格', '销量']
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: '', // 默认为直线，可选为：'line' | 'shadow'
						shadowStyle: {
							color: 'rgba(62,181,121,0.3)',
						},
						z: 0
					},
					backgroundColor: 'rgba(11,56,49,.8)',
					borderWidth: 1,
					borderColor: '#009897',
					extraCssText: 'box-shadow: 0 0 15px #e0f5ea;',
					textStyle: {
						color: '#fff'
					},
					formatter: function (params) {
						console.log(params);
						var itemHtml = '<span style="display:inline-block; padding:10px;">';
						itemHtml += '<span style="color:#fff;">' + params[1].value + '</span><span style="color:#02d4d8;">\r\r\r元/公斤</span></br>';
						itemHtml += '<span style="color:#fff;">' + params[0].value + '</span><span style="color:#02d4d8;">\r\r\r吨</span>';
						return itemHtml;
					},
					padding: 0,
					margin: 0
				},
				grid: {
					left: '5%',
					right: '4%',
					bottom: '3%',
					top: '15%',
					containLabel: true
				},
				xAxis: {
					name: '',
					type: 'category',
					axisLine: {
						lineStyle: {
							color: '#003938',
						}
					},
					axisLabel: {
						color: '#00f9ff'
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: '#003938',
							width: 1,
							type: 'solid',
						}
					},
					axisTick: {
						show: false
					},
					data: data.xAxisData,
				},
				yAxis: [{
					name: data.unit[0],
					nameTextStyle: {
						color: '#00f9ff'
					},
					type: 'value',
					min: 0,
					max: 10,
					splitNumber: 5,
					axisLine: {
						lineStyle: {
							color: '#003938',
						}
					},
					axisLabel: {
						color: '#00f9ff',
						formatter: function (value) {
							return value;
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: '#003938',
							width: 1,
							type: 'solid',
						}
					},
					axisTick: {
						show: false
					}
				},
				{
					name: data.unit[1],
					nameTextStyle: {
						color: '#00f9ff'
					},
					type: 'value',
					min: 0,
					max: 500,
					splitNumber: 5,
					axisLine: {
						lineStyle: {
							color: '#003938',
						}
					},
					axisLabel: {
						color: '#00f9ff',
						formatter: function (value) {
							return value;
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: '#003938',
							width: 1,
							type: 'solid',
						}
					},
					axisTick: {
						show: false
					}
				}],
				series: [
					{
						name: '销量',
						type: 'bar',
						yAxisIndex: 1,
						barCategoryGap: '60%',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(0,255,250,.7)'
									},
									{
										offset: 1,
										color: 'rgba(0,255,250,.3)'
									}
									]
								),
								borderWidth: 1,
								borderColor: '#0fdad8'
							},
							emphasis: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(255,240,0,.9)'
									},
									{
										offset: 1,
										color: 'rgba(255,240,0,.3)'
									}
									]
								),
								borderWidth: 1,
								borderColor: '#fff600'
							}
						},
						data: data.barData
					},
					{
						name: '价格',
						type: 'line',
						yAxisIndex: 0,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
										offset: 0,
										color: '#ffd900'
									},
									{
										offset: 1,
										color: '#ffd900'
									}
									]
								)
							}
						},
						data: data.lineData
					}
				]
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
            <div className="bar-react">
                <div ref="barReact" style={{width: "100%", height: "100%"}}></div>
            </div>
        )
    }
}