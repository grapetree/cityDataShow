function barCrossData(value){
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
    let data = {
        yAxisData: [
            ['北京市', '天津市', '石家庄', '保定市', '张家口', '唐山市'],
            ['鸭梨', '大蒜', '葡萄', '西瓜', '辣椒'],
            ['家畜', '猪', '牛', '羊', '兔']
        ],
        barData: []
    }
    if (value){
        data.yAxisData = data.yAxisData[value]
    }else{
        data.yAxisData = data.yAxisData[0]
    }
    let arr = []
    for (let i = 0; i < data.yAxisData.length; i++){
        arr.push(randomNum(10000, 200000))
    }
    arr.sort(function(a,b){
        return a>b;
    })
    data.barData = arr;
    return data
}

export { barCrossData }