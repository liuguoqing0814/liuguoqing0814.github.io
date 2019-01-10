var lineChartData = {
	//X坐标数据
		labels:["周一","周二","周三","周四","周五","周六","周末"],
		datasets:[
				{
				//统计表的背景颜色
					fillColor:"#ddd",
				//统计表画笔颜色
					strokeColor:"#f60",
				//点的颜色
					pointColor:"#f60",
				//点边框的颜色
					pointStorkeColor:"red",
				//鼠标触发时点的颜色
					pointHighlightFill:"red",
				//鼠标触发时点边框的颜色
					pointHighlightStorke:"#000",
				//Y坐标数据
					data:[300,555,655,714,899,905,1000]
				},
				{
					fillColor:"rgba(255,255,255,,0)",
					strokeColor:"rgba(92,184,92,1)",
					pointColor:"rgba(23,126,23,1)",
					pointStorkeColor:"#fff",
					pointHighlightFill:"#fff",
					pointHighlightStorke:"rgba(151,187,205,1)",
					data:[314,455,755,814,999,1000]
				}
		]
}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx,lineChartData);
}
