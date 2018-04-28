import React from 'react';
let styleVar = {
    width:'100%',
    height:'100%'
}
export class PercentPerson extends React.Component {

    constructor(props) {
        super(props)
        this.initLine = this.initLine.bind(this)
        this.percent = this.percent.bind(this)
    }

    percent(data){
        let total = parseInt(data.man) + parseInt(data.women);
        let manNum = parseInt(data.man);
        let womenNum = parseInt(data.women);
        let manPercent = Math.round(manNum / total.toFixed(0) * 100);
        let womenPercent = 100 - manPercent;
        console.log(manPercent, womenPercent);
        let manHtml = '';
        let womenHtml = '';
        for (let i = 0; i < manPercent / 2; i++) {
            manHtml += '<span style="display:inline-block;width:6%;margin:8px 1%;"><img src="' + require("../../images/man.png")+'" /></span>';
        }
        for (let i = 0; i < womenPercent / 2; i++) {
            womenHtml += '<span style="display:inline-block;width:6%;margin:8px 1%;"><img src="' + require("../../images/women.png") +'" /></span>';
        }

        let containterMan = '<div style="padding:20px;height:100%;width:50%;position:relative;box-sizing:border-box;float:left;"><div style="width:100%;">'
            + manHtml + '</div><div style="position:absolute;bottom:0;left:0;width:100%;text-align:center;margin-top:30px;color:#25edf2;font-size:20px;font-weight:bold;">' + '男\r\r\r<span style="font-size:50px;">'
            + manPercent + '</span>\r\r\r%</div></div>';
        let containterWomen = '<div style="padding:20px;height:100%;width:50%;position:relative;box-sizing:border-box;float:left;"><div style="width:100%;">'
            + womenHtml + '</div><div style="position:absolute;bottom:0;left:0;width:100%;text-align:center;margin-top:30px;color:#fff600;font-size:20px;font-weight:bold;">' + '女\r\r\r<span style="font-size:50px;">'
            + womenPercent + '</span>\r\r\r%</div></div>';
        // containter.appendChild('');
        //console.log(document.querySelector(data.el))
        this.refs.percentChart.innerHTML = containterMan + containterWomen;
    }

    initLine() {
        const { data } = this.props //外部传入的data数据
        //console.log(data)
        this.percent(data)
    }

    componentDidMount() {
        this.initLine()
    }

    componentDidUpdate() {
        this.initLine()
    }

    render() {
        return (
            <div className="line-react" style={styleVar}>
                <div ref="percentChart" style={{ width: "100%", height: "100%" }}>safdsfsdfds</div>
            </div>
        )
    }
}