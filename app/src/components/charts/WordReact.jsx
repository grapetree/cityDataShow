import React from 'react';
import echarts from 'echarts';
import 'echarts-wordcloud';

export class WordReact extends React.Component {

	constructor(props) {
	    super(props)
	    this.setLineOption = this.setLineOption.bind(this)
	    this.initLine = this.initLine.bind(this)
	}

	initLine() {
        const { data } = this.props //外部传入的data数据
        console.log(data);
		let myChart = echarts.init(this.refs.lineReact) //初始化echarts
		//我们要定义一个setLineOption函数将data传入option里面
		let options = this.setLineOption(data)
		//设置options
		myChart.setOption(options)
	}

	setLineOption(data) {
	  	return {	
            tooltip: {},
            series: [{
                type: 'wordCloud',
                gridSize: 40,
                sizeRange: [16, 50],
                rotationRange: [0, 0],
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function() {
                            let arr = ['#3996fc','#fd7234','#d570e8','#fc381d','#42f7fe','#fffd38','#17a249','#6db2fc','#5882fb','#fbfd37','#2bfdb0'];
                            let index = Math.floor((Math.random()*arr.length)); 
                            return arr[index];
                        }
                    },
                    emphasis: {
                        shadowBlur: 20,
                        shadowColor: '#fff'
                    }
                },
                data: data
            }]
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
            <div className="line-react" style={{width: "100%", height: "100%"}}>
                <div ref="lineReact" style={{width: "100%", height: "100%"}}></div>
            </div>
        )
    }
}