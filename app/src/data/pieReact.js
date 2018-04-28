function pieData(value) {
    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
    let names =[
        ["北京市", "天津市", "石家庄市", "其他"],
        ["鸭梨", "大蒜", "西瓜", "其他"],
        ["0~20", "20~40", "40~60", "60以上"]
    ];
    if(value){
        names = names[value];
    }else{
        names = names[0]
    }
    console.log(names);
    let colors = ["#007062", "#00ffd8", "#00ffd0", "#cfd605"];
    let dataLen =[];
    for(var i=0;i<names.length;i++){
        dataLen.push({
            "value": randomNum(0, 40),
            "name": names[i],
            "itemStyle": {
                "normal": {
                    "borderColor": colors[i],
                    "borderWidth": 2
                }
            }
        })
    }
    let data = {
        dataLen: dataLen,
        lineData: [1, 2, 10, 4, 5, 6, 3, 8, 9, 4],
        barData: [450, 200, 480, 370, 200, 200, 480, 370, 250, 400]
    }


    return data
}

export { pieData }