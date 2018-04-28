import React from 'react';
import {data} from '../../data/mapdata'
import echarts from 'echarts';
import bmap from 'echarts/extension/bmap/bmap';

export class LineReact extends React.Component {

	constructor(props) {
	    super(props)
	    this.setLineOption = this.setLineOption.bind(this)
	    this.initLine = this.initLine.bind(this)
    }

	initLine() {
        //const { data } = this.props //外部传入的data数据

		let myChart = echarts.init(this.refs.lineReact) //初始化echarts
		//我们要定义一个setLineOption函数将data传入option里面
		let options = this.setLineOption(data)
        //设置options
		myChart.setOption(options)
	}

	setLineOption(data) {
	  	return {	
            bmap: data.bmap,
            color: ['gold', 'aqua', 'lime'],
            title: {
                text: '产品流向',
                left: 'center',
                top: '150',
                textStyle: {
                    color: '#fff',
                    fontSize:14
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data: ['聊城 Top10', '上海 Top10', '广州 Top10'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: 'single'
            },
            geo: {
                map: 'bmap',
                polyline: true,
                progressiveThreshold: 500,
                progressive: 200,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: data.series
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