var str="73246764526562";
var obj={};
for(var i=0;i<str.length;i++){
	var v=str.charAt(i);
	console.log(obj[v])
	
	if(obj[v]&&obj[v].value==v){
		obj[v].count=++obj[v].count;
		
	}else{
		obj[v]={};
		obj[v].count=1;
		obj[v].value=v;
	}
}
for(var key in obj){
	console.log(obj[key].value+"    "+obj[key].count+"=====>");
}
