
function lineData(){
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
		xAxisData: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8'],
		seriesData: []
	}
	let arr = []
    for(let i=0; i < 8; i++){
        arr.push(randomNum(1, 10))
	}
	data.seriesData = arr;
	return data;
}

export { lineData }