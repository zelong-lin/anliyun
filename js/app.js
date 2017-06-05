/**
 * zero for 2016-11-05
 * **/
//数据库创建
var db = window.openDatabase("card", "1.0", "dggis", 200000);
db.transaction(function(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS card (id,imgpath)');
}, function(err) {
	alert("Error processing SQL: " + err.code);
});

//弹出框隐藏
$('.hide-modal').on('tap', function() {
	//是否显示背景内容
	var contentShow = $(this).attr('data-content');
	if(contentShow) {
		$('#index-content').show();
	}
	$('#' + $(this).attr('data-hide')).hide();
	$('.mui-backdrop').remove();
})