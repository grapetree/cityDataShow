function barData(key){
   
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
        xAxisData:[
            ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['第一季度', '第二季度', '第三季度', '第四季度'],
            ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        ],
        lineData: [],
        barData: [],
        unit: [
            ['价格：元/公斤', '销量：万吨'],
            ['用地：万/公顷', '产量：吨']
        ]
    }
    if (key) {
        data.xAxisData = data.xAxisData[key]
        data.unit = data.unit[0]
    }else{
        data.xAxisData = data.xAxisData[0]
        data.unit = data.unit[0]
    };
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < data.xAxisData.length; i++){
        arr1.push(randomNum(1, 10))
        arr2.push(randomNum(200, 500))
    }

    data.lineData = arr1;
    data.barData = arr2;
    return data

}

export { barData }